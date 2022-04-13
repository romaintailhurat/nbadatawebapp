import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { getSupabaseClient } from '../../remote/supabaseclient.js'


const supabase = getSupabaseClient();

function Players({ players }) {
	return (
		<div>
			<h1>Players</h1>
			<h2>{players.length}</h2>
			<ul>
				{players.map(player => {
					const link = '/players/' + player.player_id;
					return (
						<li key={player.player_id}>							
								<Link href={link}>
                  <p className={styles.card}>
                  {player.player_name}</p>
                </Link>
							
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export async function getServerSideProps(context) {
	let { data: players, error } = await supabase
		.from('players')
		.select('player_id, player_name')
		.order('player_name');

	return {
		props: { players: players } // will be passed to the page component as props
	};
}

export default Players;
