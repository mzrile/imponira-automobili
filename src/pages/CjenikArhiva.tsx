import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { CJENIK_URL, cjenikFileUrl } from "@/lib/cjenik";

type Entry = { base: string; date: string; time: string; created: string };

const CjenikArhiva = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cjenik-arhiva"],
    queryFn: async () => {
      const res = await fetch(CJENIK_URL);
      if (!res.ok) throw new Error("Greška pri dohvaćanju arhive");
      const { files } = (await res.json()) as { files: { name: string; created_at: string }[] };
      const map = new Map<string, Entry>();
      for (const f of files) {
        const base = f.name.replace(/\.(csv|xml)$/, "");
        const parts = base.split("_");
        map.set(base, { base, date: parts[parts.length - 2], time: parts[parts.length - 1].replace("-", ":"), created: f.created_at });
      }
      return [...map.values()].sort((a, b) => b.created.localeCompare(a.created));
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Arhiva cjenika - ImpoNira Automobili" description="Arhiva strojno čitljivih cjenika vozila." url="https://imponira.eu/cjenik-arhiva" />
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-12 text-foreground">Arhiva cjenika</h1>
        {isLoading && <p className="text-center text-muted-foreground">Učitavanje…</p>}
        {error && <p className="text-center text-destructive">Arhivu trenutno nije moguće učitati.</p>}
        {data && data.length === 0 && <p className="text-center text-muted-foreground">Još nema objavljenih cjenika.</p>}
        <div className="space-y-4">
          {data?.map((e) => (
            <Card key={e.base} className="p-4 bg-card border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="font-bold text-foreground">{e.date} u {e.time}</p>
                <p className="text-xs text-muted-foreground break-all">{e.base}</p>
              </div>
              <div className="flex gap-4 shrink-0">
                <a href={cjenikFileUrl(`${e.base}.csv`)} className="text-primary hover:underline">CSV</a>
                <a href={cjenikFileUrl(`${e.base}.xml`)} className="text-primary hover:underline">XML</a>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CjenikArhiva;
