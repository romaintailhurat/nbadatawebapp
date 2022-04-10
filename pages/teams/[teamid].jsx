import { useRouter } from 'next/router';

function Team() {
  const router = useRouter();
	const { teamid } = router.query;
  return <div>This is team {teamid}</div>
}

export default Team;