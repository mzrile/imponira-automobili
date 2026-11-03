export type Vozilo = {
  id: number; slug: string; marka: string; naziv: string; cijena: number;
  datumCijene: string; prodano: boolean; redovnaCijena: number | null;
};

export function priceFields(v: Vozilo) {
  const cijena = (v.redovnaCijena ?? v.cijena).toFixed(2);
  return {
    cijena_za_jedinicu_mjere: cijena,
    maloprodajna_cijena: cijena,
    posebni_oblik_prodaje: "NE",
    naziv_posebnog_oblika_prodaje: "",
    dodatna_cijena: v.cijena.toFixed(2),
    datum_dodatne_cijene: v.datumCijene,
  };
}