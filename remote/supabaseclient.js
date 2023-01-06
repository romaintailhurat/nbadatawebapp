import { createClient } from '@supabase/supabase-js';

export function getSupabaseClient() {
  const supabaseUrl = 'https://pqueqfsinqobuaznhdys.supabase.co';
  const supabaseKey = process.env.SUPABASE_KEY;  
  const supabase = createClient(supabaseUrl, supabaseKey);
  return(supabase);
}