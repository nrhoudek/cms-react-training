import Head from 'next/head'
import { Comic } from './Comic'
import StaticData from '../data/Static_Data.json'
import styles from '@/styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>Exercise 2</title>
				<meta name="description" content="Exercise 2 for CMS React Training course" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.slides} style={{display: 'grid', gap: 20 + 'px', gridTemplateColumns: 'repeat(auto-fill, minmax(183px, 1fr))'}}>
				{StaticData.map(comic =>
					<Comic 
						key={comic.id}
						title={comic.title}
						issueNumber={comic.issueNumber}
						publishDate ={comic.publishDate}
						creators={comic.creators}
						thumbnail={comic.thumbnail}
					/>
				)}
			</main>
		</>
	)
}
