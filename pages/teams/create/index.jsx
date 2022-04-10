import { useState } from 'react';

function checkTeam(team) {
	// team is an array
	const teamLengthOK = team.length === 15 ? true : false;
	//const teamFilledOK = team.filter(element => element === undefined).length
	return teamLengthOK;
}

function PlayerAdder({ i, state, setstate, players }) {
	const handleChange = (event, idx) => {
		state[idx] = event.target.value;
		setstate([...state]);
		console.log(state, i);
	};
	return (
		<div>
			<p>{i + 1} Choose a player</p>
			<select onChange={e => handleChange(e, i)}>
				<option value="">--Choose a player--</option>
				{players.map(p => (
					<option key={p.player_id} value={p.player_id}>
						{p.player_name}
					</option>
				))}
			</select>
		</div>
	);
}

function TeamCreation() {
	const [state, setstate] = useState([]);
	const fakes = [
		{ player_id: 'jordan', player_name: 'Michael Jordan' },
		{ player_id: 'shaq', player_name: "Shaquille O'Neal" },
    { player_id: 'kobe', player_name: "Kobe Bryant" },
    { player_id: 'pippen', player_name: "Scottie Pippen" },
    { player_id: 'barkley', player_name: "Chuck Barkley" },
    { player_id: 'iverson', player_name: "Allen Iverson" },		
	];
	return (
		<div>
			<h1>Team creation</h1>
			<p>{state.filter(element => element !== undefined).length}/15</p>
			{[...Array(15).keys()].map(i => (
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
