# Project architecture rules

- Store a vehicle's price date with its vehicle data and use the shared default only for legacy listings, so cards and details remain synchronized.
- The daily price list function reads `supabase/functions/cjenik/vozila.json`; whenever a vehicle is added, removed, repriced or sold, update that file in the same change (the anchor price/date stay as first published), because the function cannot import site code.
- Price list files live in a private storage bucket and are served through the `cjenik` function (`?file=`), because the workspace blocks public buckets.
- A repriced vehicle keeps its anchor `cijena`/`datumCijene` in `vozila.json` and carries the new selling price in `akcijskaCijena`, because the list publishes the anchor as `dodatna_cijena` and the selling price as the main price; the site's `price` always shows the selling price while `priceDate` stays the anchor date.
- `vozila.json` is bundled into the `cjenik` edge function at deploy time, so redeploy the function after editing that file, otherwise the published list keeps the old prices.
