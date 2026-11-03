import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import vozila from "./vozila.json" with { type: "json" };
import { priceFields, type Vozilo } from "./prices.ts";

const BUCKET = "cjenik";
// Storage keys must be ASCII, so diacritics are dropped.
const ADRESA = "Ivana Simunovica 11-1 10360 Sesvete";
const OZNAKA = "P1";
const SITE = "https://imponira-automobili.lovable.app";
const PREFIX = `prodajni salon_${ADRESA}_${OZNAKA}_`;
const KEEP_DAYS = 40;

const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

const COLS = ["sifra","naziv","marka","jedinica_mjere","cijena_za_jedinicu_mjere","maloprodajna_cijena","posebni_oblik_prodaje","naziv_posebnog_oblika_prodaje","dodatna_cijena","datum_dodatne_cijene","barkod","dostupnost","valuta","url"];

function zagreb(d = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Zagreb", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false,
  }).formatToParts(d).map((x) => [x.type, x.value]));
  return { date: `${p.day}.${p.month}.${p.year}`, time: `${p.hour}-${p.minute}`, hour: Number(p.hour) };
}

function rows() {
  return (vozila as Vozilo[]).map((v) => {
    return {
      sifra: String(v.id), naziv: v.naziv, marka: v.marka, jedinica_mjere: "kom",
      ...priceFields(v),
      barkod: "", dostupnost: v.prodano ? "nedostupno" : "dostupno", valuta: "EUR", url: `${SITE}/car/${v.slug}`,
    } as Record<string, string>;
  });
}

const csvCell = (s: string) => /[";\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
const xmlEsc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function buildCsv(r: Record<string, string>[]) {
  return "\uFEFF" + [COLS.join(";"), ...r.map((x) => COLS.map((c) => csvCell(x[c])).join(";"))].join("\r\n") + "\r\n";
}
function buildXml(r: Record<string, string>[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<cjenik>\n` +
    r.map((x) => "  <proizvod>\n" + COLS.map((c) => `    <${c}>${xmlEsc(x[c])}</${c}>`).join("\n") + "\n  </proizvod>").join("\n") +
    "\n</cjenik>\n";
}

async function listAll() {
  const { data, error } = await supabase.storage.from(BUCKET).list("", { limit: 1000, sortBy: { column: "created_at", order: "desc" } });
  if (error) throw error;
  return data ?? [];
}

async function upload(name: string, body: string, type: string) {
  const { error } = await supabase.storage.from(BUCKET).upload(name, new Blob([body], { type }), { upsert: true, contentType: type });
  if (error) throw error;
}

async function correctSaleLabels() {
  let corrected = 0;
  for (const file of await listAll()) {
    if (!(file.name.startsWith(PREFIX) || file.name === "cjenik.csv" || file.name === "cjenik.xml")) continue;
    if (!file.name.endsWith(".csv") && !file.name.endsWith(".xml")) continue;
    const { data, error } = await supabase.storage.from(BUCKET).download(file.name);
    if (error || !data) throw error ?? new Error("Datoteka nije pronađena");
    const original = await data.text();
    const isCsv = file.name.endsWith(".csv");
    const correctedText = isCsv
      ? original.replace(/;DA;Akcija;/g, ";NE;;")
      : original.replace(/<posebni_oblik_prodaje>DA<\/posebni_oblik_prodaje>\s*<naziv_posebnog_oblika_prodaje>Akcija<\/naziv_posebnog_oblika_prodaje>/g,
        "<posebni_oblik_prodaje>NE</posebni_oblik_prodaje>\n    <naziv_posebnog_oblika_prodaje></naziv_posebnog_oblika_prodaje>");
    if (correctedText === original) continue;
    await upload(file.name, correctedText, isCsv ? "text/csv; charset=utf-8" : "application/xml; charset=utf-8");
    corrected++;
  }
  return corrected;
}

async function generate() {
  const files = await listAll();
  let max = 0;
  for (const f of files) {
    if (!f.name.startsWith(PREFIX)) continue;
    const n = Number(f.name.slice(PREFIX.length).split("_")[0]);
    if (n > max) max = n;
  }
  const { date, time } = zagreb();
  const base = `${PREFIX}${String(max + 1).padStart(3, "0")}_${date}_${time}`;
  const r = rows();
  const csv = buildCsv(r), xml = buildXml(r);
  await upload(`${base}.csv`, csv, "text/csv; charset=utf-8");
  await upload(`${base}.xml`, xml, "application/xml; charset=utf-8");
  await upload("cjenik.csv", csv, "text/csv; charset=utf-8");
  await upload("cjenik.xml", xml, "application/xml; charset=utf-8");

  const cutoff = Date.now() - KEEP_DAYS * 86400000;
  const old = files.filter((f) => f.name.startsWith(PREFIX) && f.created_at && new Date(f.created_at).getTime() < cutoff).map((f) => f.name);
  if (old.length) await supabase.storage.from(BUCKET).remove(old);
  return { file: base, vozila: r.length, obrisano: old.length };
}

const json = (b: unknown, status = 200) =>
  new Response(JSON.stringify(b), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const url = new URL(req.url);
    if (req.method === "GET") {
      const file = url.searchParams.get("file");
      if (file) {
        if (file.includes("/") || !(file === "cjenik.csv" || file === "cjenik.xml" || file.startsWith(PREFIX))) return json({ error: "Nepoznata datoteka" }, 400);
        const { data, error } = await supabase.storage.from(BUCKET).download(file);
        if (error || !data) return json({ error: "Datoteka nije pronađena" }, 404);
        const isCsv = file.endsWith(".csv");
        return new Response(data, { headers: { ...corsHeaders,
          "Content-Type": isCsv ? "text/csv; charset=utf-8" : "application/xml; charset=utf-8",
          "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(file)}`, "Cache-Control": "no-cache" } });
      }
      const files = (await listAll()).filter((f) => f.name.startsWith(PREFIX))
        .map((f) => ({ name: f.name, created_at: f.created_at }));
      return json({ files });
    }
    if (req.method === "POST") {
      const body = await req.json().catch(() => ({}));
      // Scheduler fires at 22:05 and 23:05 UTC; only the run at 00:05 Zagreb time proceeds (handles DST).
      if (body?.scheduled === true && zagreb().hour !== 0) return json({ skipped: true });
      if (body?.ispraviOznake === true) await correctSaleLabels();
      return json(await generate());
    }
    return json({ error: "Method not allowed" }, 405);
  } catch (e) {
    console.error(e);
    return json({ error: e instanceof Error ? e.message : "Greška" }, 500);
  }
});
