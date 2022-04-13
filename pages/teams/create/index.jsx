import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from '../../../styles/Home.module.css';

const teamSize = 5;

function checkTeam(team) {
	// team is an array
	const teamLengthOK = team.length === teamSize ? true : false;
	const teamFilledOK =
		team
			.filter(element => element === undefined)
			.filter(element => element === '').length === 0;
	return teamLengthOK && teamFilledOK;
}

function PlayerAdder({ i, state, setstate, players }) {
	const handleChange = (event, newValue, idx) => {        
		state[idx] = newValue
		setstate([...state]);
	};
	return (
		<div>
			<p>{i + 1}</p>
			<Autocomplete
				disablePortal
				id="combo-box-demo"
				options={players}
				getOptionLabel={option => option.player_name}
				sx={{ width: 300 }}
				renderInput={params => <TextField {...params} label="Player" />}        
				onChange={(event, newValue) => handleChange(event, newValue, i)}
			/>
			
		</div>
	);
}

function TeamCreation() {
	const [state, setstate] = useState([]);
	const fakes = [
		{ player_id: 'jordan', player_name: 'Michael Jordan' },
		{ player_id: 'shaq', player_name: "Shaquille O'Neal" },
		{ player_id: 'kobe', player_name: 'Kobe Bryant' },
		{ player_id: 'pippen', player_name: 'Scottie Pippen' },
		{ player_id: 'barkley', player_name: 'Chuck Barkley' },
		{ player_id: 'iverson', player_name: 'Allen Iverson' }
	];

	const handleClick = event => {
		fetch('https://httpbin.org/post', { method: 'POST', body: state })
			.then(resp => resp.json())
			.then(data => console.log(data.data));
	};

	return (
		<div className={styles.container}>
			<h1>Team creation</h1>
			<h2>Add players to your team</h2>
			<p>
				{
					state
						.filter(element => element !== undefined)
						.filter(element => element !== '').length
				}/{teamSize} players
			</p>

			<p>
				{checkTeam(state) ? (
					<Button variant="contained" onClick={e => handleClick(e)}>
						Create
					</Button>
				) : (
					<Button variant="contained" disabled>
						Create
					</Button>
				)}
			</p>
			{[...Array(teamSize).keys()].map(i => (
				<PlayerAdder
					key={i}
					i={i}
					players={fakes}
					state={state}
					setstate={setstate}
				/>
			))}
		</div>
	);
}

export default TeamCreation;
