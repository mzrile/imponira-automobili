import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import vozila from "./vozila.json" with { type: "json" };
import { priceFields } from "./prices.ts";

for (const [id, selling, anchor, date] of [
  [43, 25990, 26290, "02.10.2026."],
  [44, 25790, 25990, "02.10.2026."],
  [41, 25990, 26490, "10.09.2026."],
  [36, 20790, 20990, "10.09.2026."],
  [3, 42900, 44500, "10.09.2026."],
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