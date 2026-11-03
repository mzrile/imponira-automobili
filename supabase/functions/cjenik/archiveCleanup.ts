// Intermediate versions explicitly withdrawn by the dealership.
const WITHDRAWN_BASES = new Set([
  "prodajni salon_Ivana Simunovica 11-1 10360 Sesvete_P1_023_03.11.2026_10-16",
  "prodajni salon_Ivana Simunovica 11-1 10360 Sesvete_P1_024_03.11.2026_10-29",
]);

export function isWithdrawnArchive(name: string): boolean {
  if (!name.endsWith(".csv") && !name.endsWith(".xml")) return false;
  return WITHDRAWN_BASES.has(name.slice(0, -4));
}