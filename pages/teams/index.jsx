import Link from 'next/link';
import styles from '../../styles/Home.module.css';

function TeamsPage() {
  return <div className={styles.container}>
    <Link href="/teams/create">Create a team</Link>
  </div>
}

export default TeamsPage;