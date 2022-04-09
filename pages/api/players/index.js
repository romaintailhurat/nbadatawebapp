import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pqueqfsinqobuaznhdys.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default async (req, res) => {  
  let { data: players, error } = await supabase
    .from('perfs')
    .select('player_id')

  //const uniques = new Set(...players.data)
  const names = players.map(e => e.player_id)
  const unique = names.filter((e,i) => names.indexOf(e) === i)

  res.status(200).json({ players: unique})
}