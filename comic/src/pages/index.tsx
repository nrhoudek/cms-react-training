import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Comic } from './components/Comic'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroImage from './components/HeroImage'
import Intro from './components/Intro'
import useFetch from './hooks/useFetch'
import styles from '../styles/Home.module.css'

const md5 = require('md5');

//Runs this function serverside before build. Allows private API key to stay private.
export const getStaticProps: GetStaticProps = async() =>  {
	const timestamp: number = Date.now();
	const hash: string = md5(`${timestamp}${process.env.PRIVATE_API_KEY}${process.env.PUBLIC_API_KEY}`)

	let API_URL: string = `https://gateway.marvel.com:443/v1/public/comics?ts=${timestamp}&apikey=${process.env.PUBLIC_API_KEY}&hash=${hash}`
	return { props: { API_URL } }
}

export default function Home({ API_URL }: InferGetStaticPropsType<typeof getStaticProps>) {
	const { isLoading, serverError, comics } = useFetch(API_URL);
	return (
		<>
			<Head>
				<title>Final Exercise</title>
				<meta name="description" content="Final for CMS React Training course" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<Header />
			</header>
			<section>
				<HeroImage />
			</section>
			{isLoading && <h2>Loading Comics...</h2>}
			{serverError && !isLoading && <h2>Error Loading Comics</h2>}

			{!isLoading && !serverError && comics &&
				<main>
					<div>
						<Intro />
					</div>
					<div className={styles.slides} style={{display: 'grid', gap: '20px 30px', gridTemplateColumns: 'repeat(auto-fill, minmax(183px, 1fr))'}}>
						{comics.map(comic =>
							<Comic 
								key={comic.id}
								comicData = {comic}
							/>
						)}
					</div>
				</main>
			}
			<footer>
				<Footer />
			</footer>
		</>
	)
}
