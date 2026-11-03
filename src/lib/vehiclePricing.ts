import vehicles from "../../supabase/functions/cjenik/vozila.json";

export function anchorPrice(id: number, fallback: number) {
  return vehicles.find((vehicle) => vehicle.id === id)?.cijena ?? fallback;
}

export function anchorPriceBySlug(slug: string | undefined, fallback: number) {
  return vehicles.find((vehicle) => vehicle.slug === slug)?.cijena ?? fallback;
}