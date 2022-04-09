import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const supabaseUrl = 'https://pqueqfsinqobuaznhdys.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Players({ players }) {
	return (
		<div>
			<h1>Players</h1>
			<h2>{players.length}</h2>
			<li>
				{players.map(player => {
					const link = '/players/' + player.player_id;
					return (
						<ul>							
								<Link href={link}>
                  <p className={styles.card}>
                  {player.player_name}</p>
                </Link>
							
						</ul>
					);
				})}
			</li>
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
