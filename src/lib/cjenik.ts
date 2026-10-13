export const CJENIK_URL = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/cjenik`;
export const cjenikFileUrl = (name: string) => `${CJENIK_URL}?file=${encodeURIComponent(name)}`;
