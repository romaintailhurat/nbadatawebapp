import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>Will
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>NBA data</h1>

				<p className={styles.description}>
					The place to get your NBA players stats!
				</p>

				<div className={styles.grid}>
					<Link href="/players">
						<div className={styles.card}>
							<h2>Players &#945;</h2>
							<p>All players stats</p>
						</div>
					</Link>

					<Link href="/teams">
						<div className={styles.card}>
							<h2>Teams &#946;</h2>
							<p>All teams</p>
						</div>
					</Link>					
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="http://ibfl.atspace.eu/"
					target="_blank"
          rel="noreferrer"
				>
					IBFL &rarr;
				</a>
			</footer>
		</div>
	);
}
