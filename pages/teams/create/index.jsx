function PlayerAdder({ i }) {
	const fakes = ['jordan', 'shaq'];
	return (
		<div>
			<p>{i + 1} Choose a player</p>
			<select>{fakes.map(p => <option key={p} value={p}>{p}</option>)}</select>
		</div>
	);
}

function TeamCreation() {
	return (
		<div>
			<h1>Team creation</h1>
			{[...Array(15).keys()].map(i => <PlayerAdder key={i} i={i} />)}
		</div>
	);
}

export default TeamCreation;
