import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import styles from '../../styles/Home.module.css';
import { getSupabaseClient } from '../../remote/supabaseclient.js';

const supabase = getSupabaseClient();

function Players({ players }) {
	return (
		<div className={styles.container}>
			<h1>Players</h1>
			<h2>{players.length}</h2>
			<List>
				{players.map(player => {
					const link = '/players/' + player.player_id;
					return (
						<ListItem key={player.player_id}>
							<ListItemButton>
								<Link href={link}>{player.player_name}</Link>
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
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
