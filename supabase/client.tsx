import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseUrl) throw "supabase키가 없습니다.";
if (!supabaseKey) throw "supabase키가 없습니다.";

export const supabase = createClient(supabaseUrl, supabaseKey);
