import { getSupabaseClient } from '../../remote/supabaseclient.js';

const supabase = getSupabaseClient();

function Perfs({perfs}) {
  return(
    <div>
      <h1>Perfs</h1>
      <h2>Last perfs</h2>
      {perfs.map(perf => <p>{perf.player_id}: {perf.score}</p>)}
    </div>
  )
}

export async function getServerSideProps(context) {
	let { data: perfs, error } = await supabase
		.from('perfs')
		.select('player_id, score')
		.order('score', { ascending: false })
    .eq('date', '2022-01-07');

	return {
		props: { perfs: perfs } // will be passed to the page component as props
	};
}

export default Perfs;