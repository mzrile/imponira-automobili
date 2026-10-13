# Project architecture rules

- Store a vehicle's price date with its vehicle data and use the shared default only for legacy listings, so cards and details remain synchronized.
- The daily price list function reads `supabase/functions/cjenik/vozila.json`; whenever a vehicle is added, removed, repriced or sold, update that file in the same change (the anchor price/date stay as first published), because the function cannot import site code.
- Price list files live in a private storage bucket and are served through the `cjenik` function (`?file=`), because the workspace blocks public buckets.
