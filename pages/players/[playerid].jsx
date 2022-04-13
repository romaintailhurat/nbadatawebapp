import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { grey, orange, red, blue, lightBlue, green, lightGreen } from '@mui/material/colors';
import styles from '../../styles/Home.module.css';
import { getSupabaseClient } from '../../remote/supabaseclient.js';

const supabase = getSupabaseClient();

function getColorFromScore(score) {
  
  switch (true) { // weird, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
		case score < 0:
			return blue[500];      
    case score >= 0 && score < 10:      
      return lightBlue[500];
    case score >= 10 && score < 20:
      return lightGreen[500];
    case score >= 20 && score < 30:
      return orange[500];
    case score >= 30:
      return red[200]  ;
		default:
			return grey[300];
	}
}

function Player({ perfs }) {
	const router = useRouter();
	const { playerid } = router.query;
	return (
		<div>
			<h1>This is the page for {playerid}</h1>
			{perfs.map(perf => (
				<div key={perf.date}>
					<Card>
						<CardHeader />
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color="text.secondary"
								gutterBottom
							>
								{perf.date}
							</Typography>
							<Typography sx={{ color: getColorFromScore(perf.score) }} variant="h2">
								{perf.score}
							</Typography>
						</CardContent>
					</Card>
				</div>
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
