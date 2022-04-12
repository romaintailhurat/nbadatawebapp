import { useState } from 'react';

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
	const handleChange = (event, idx) => {
    const candidate = players.filter(player => player.player_id === event.target.value);    
		state[idx] = candidate.shift();
		setstate([...state]);
	};
	return (
		<div>
			<p>{i + 1}</p>
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
		{ player_id: 'kobe', player_name: 'Kobe Bryant' },
		{ player_id: 'pippen', player_name: 'Scottie Pippen' },
		{ player_id: 'barkley', player_name: 'Chuck Barkley' },
		{ player_id: 'iverson', player_name: 'Allen Iverson' }
	];

  const handleClick = event => {
    fetch("https://httpbin.org/post", {method: "POST", body: state}).then(resp => resp.json()).then(data => console.log(data));
  }
  
	return (
		<div>
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
					<button onClick={e => handleClick(e)}>Create</button>
				) : (
					<button disabled>Create</button>
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
