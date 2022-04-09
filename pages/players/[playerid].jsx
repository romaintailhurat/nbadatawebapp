import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';
import styles from '../../styles/Home.module.css';

const supabaseUrl = 'https://pqueqfsinqobuaznhdys.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Player({ perfs }) {
	const router = useRouter();
	const { playerid } = router.query;
	return (
		<div>
			<h1>This is the page for {playerid}</h1>
			{perfs.map(perf => (
				<p key={perf.date} className={styles.card}>
					{perf.date} - {perf.score}
				</p>
			))}
		</div>
	);
}

export async function getServerSideProps(context) {
	const { playerid } = context.query;

	let { data: perfs, error } = await supabase
		.from('perfs') // join with the players table to get the name
		.select('score, date')
		.order('date', { ascending: false })
		.eq('player_id', playerid);

	return { props: { perfs } };
}

export default Player;
