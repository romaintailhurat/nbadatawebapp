import { getSupabaseClient } from '../../remote/supabaseclient.js';

const supabase = getSupabaseClient();

function Perfs({ perfs, date }) {
  return (
    <div>
      <h1>Perfs</h1>
      <h2>From {date}</h2>
      {perfs.map(perf => <p key={perf.player_id}>{perf.player_id}: {perf.score}</p>)}
    </div>
  )
}

export async function getServerSideProps(context) {

  const { date } = context.query;
  
  let { data: perfs, error } = await supabase
    .from('perfs')
    .select('player_id, score')
    .order('score', { ascending: false })
    .eq('date', date);

  return {
    props: { perfs: perfs, date } // will be passed to the page component as props
  };
}

export default Perfs;