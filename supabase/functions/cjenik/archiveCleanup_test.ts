import { isWithdrawnArchive } from "./archiveCleanup.ts";

Deno.test("remove only both intermediate versions requested on 03.11.2026", () => {
  const prefix = "prodajni salon_Ivana Simunovica 11-1 10360 Sesvete_P1_";
  for (const extension of ["csv", "xml"]) {
    for (const version of ["023_03.11.2026_10-16", "024_03.11.2026_10-29"]) {
      if (!isWithdrawnArchive(`${prefix}${version}.${extension}`)) throw new Error(`Not withdrawn: ${version}`);
    }
    for (const version of ["022_03.11.2026_00-05", "025_03.11.2026_10-48", "021_02.11.2026_00-05"]) {
      if (isWithdrawnArchive(`${prefix}${version}.${extension}`)) throw new Error(`Must preserve: ${version}`);
    }
    if (isWithdrawnArchive(`cjenik.${extension}`)) throw new Error("Must preserve current list");
  }
});