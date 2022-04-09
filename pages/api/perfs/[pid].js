import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pqueqfsinqobuaznhdys.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default async (req, res) => {

  const { pid } = req.query
  
  let { data: perfs, error } = await supabase
    .from('perfs')
    .select('score, date')
    .eq('player_id', pid)

  res.status(200).json({ data: perfs})
}