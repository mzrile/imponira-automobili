import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import vozila from "./vozila.json" with { type: "json" };

const root = new URL("../../../", import.meta.url);
const home = await Deno.readTextFile(new URL("src/pages/Home.tsx", root));
const offer = await Deno.readTextFile(new URL("src/pages/UsedCars.tsx", root));
const details = await Deno.readTextFile(new URL("src/pages/CarDetail.tsx", root));
const featured = home.split("const featuredCars = [")[1].split("];", 1)[0];

Deno.test("Homepage offers the six selected vehicles in descending price order", () => {
  assertEquals([...featured.matchAll(/id: (\d+)/g)].map((m) => Number(m[1])), [30, 47, 48, 42, 43, 49]);
});

for (const vehicle of vozila) {
  Deno.test(`Vehicle ${vehicle.id}: offer and detail selling prices match the price list`, () => {
    const card = offer.split(`slug: "${vehicle.slug}"`)[1]?.split("}", 1)[0];
    const detail = details.split(`"${vehicle.slug}": {`)[1]?.split("images:", 1)[0];
    assertEquals(Number(card?.match(/price: (\d+)/)?.[1]), vehicle.redovnaCijena ?? vehicle.cijena);
    assertEquals(Number(detail?.match(/price: (\d+)/)?.[1]), vehicle.redovnaCijena ?? vehicle.cijena);
  });
}

Deno.test("Audi S3 has the provided year, mileage, power and transmission", () => {
  const detail = details.split('"audi-s3-sportback-2-0-tfsi-quattro": {')[1]?.split("images:", 1)[0];
  assertEquals(Number(detail?.match(/year: (\d+)/)?.[1]), 2021);
  assertEquals(Number(detail?.match(/mileage: (\d+)/)?.[1]), 105900);
  assertEquals(detail?.match(/power: "([^"]+)"/)?.[1], "228 kW");
  assertEquals(detail?.match(/transmission: "([^"]+)"/)?.[1], "Automatski");
});