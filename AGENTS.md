# Project architecture rules

- Store a vehicle's price date with its vehicle data and use the shared default only for legacy listings, so cards and details remain synchronized.
- The daily price list function reads `supabase/functions/cjenik/vozila.json`; whenever a vehicle is added, removed, repriced or sold, update that file in the same change (the anchor price/date stay as first published), because the function cannot import site code.
- Price list files live in a private storage bucket and are served through the `cjenik` function (`?file=`), because the workspace blocks public buckets.
- A repriced vehicle keeps its anchor `cijena`/`datumCijene` in `vozila.json` and carries the new regular selling price in `redovnaCijena`; the price list uses `prices.ts` to publish regular prices without special-sale flags, independently of the original anchor.
- Site cards and details resolve original dated prices through `src/lib/vehiclePricing.ts` from `vozila.json`, so dated labels never accidentally display the current selling price.
- `vozila.json` is bundled into the `cjenik` edge function at deploy time, so redeploy the function after editing that file, otherwise the published list keeps the old prices.
