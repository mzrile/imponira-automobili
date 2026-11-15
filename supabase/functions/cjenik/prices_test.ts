import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import vozila from "./vozila.json" with { type: "json" };
import { priceFields } from "./prices.ts";

for (const [id, selling, anchor, date] of [
  [17, 69900, 72900, "10.09.2026."],
  [19, 36900, 37900, "10.09.2026."],
  [43, 25790, 26290, "02.10.2026."],
  [44, 25390, 25990, "02.10.2026."],
  [41, 25490, 26490, "10.09.2026."],
  [36, 20490, 20990, "10.09.2026."],
  [3, 42900, 44500, "10.09.2026."],
  [47, 61990, 61990, "15.11.2026."],
  [48, 35490, 35490, "15.11.2026."],
] as const) {
  Deno.test(`Vehicle ${id}: regular price and unchanged dated anchor`, () => {
    const vehicle = vozila.find((v) => v.id === id);
    if (!vehicle) throw new Error(`Missing vehicle ${id}`);
    assertEquals(priceFields(vehicle), {
      cijena_za_jedinicu_mjere: selling.toFixed(2),
      maloprodajna_cijena: selling.toFixed(2),
      posebni_oblik_prodaje: "NE",
      naziv_posebnog_oblika_prodaje: "",
      dodatna_cijena: anchor.toFixed(2),
      datum_dodatne_cijene: date,
    });
  });
}

Deno.test("No vehicle is a special sale", () => {
  assertEquals(vozila.filter((v) => priceFields(v).posebni_oblik_prodaje !== "NE").length, 0);
});

Deno.test("Withdrawn Octavia Panorama is not offered", () => {
  assertEquals(vozila.some((v) => v.naziv.includes("Panorama")), false);
});