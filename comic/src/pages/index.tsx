import Head from 'next/head'
import { Comic } from './components/Comic'
import useFetch from './hooks/useFetch'
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.css'

const md5 = require('md5');

//Runs this function serverside before build. Allows private API key to stay private.
export const getStaticProps: GetStaticProps = async() =>  {
	const timestamp: number = Date.now();
	const hash: string = md5(`${timestamp}${process.env.PRIVATE_API_KEY}${process.env.PUBLIC_API_KEY}`)

	let API_URL: string = `https://gateway.marvel.com:443/v1/public/comics?ts=${timestamp}&apikey=${process.env.PUBLIC_API_KEY}&hash=${hash}`
	return { props: { API_URL } }
}

export default function Home({ API_URL }) {
	const { isLoading, serverError, apiData } = useFetch(API_URL);
	return (
		<>
			<Head>
				<title>Exercise 2</title>
				<meta name="description" content="Exercise 2 for CMS React Training course" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{isLoading && <h2>Loading Comics...</h2>}
			{serverError && !isLoading && <h2>Error Loading Comics</h2>}

			{!isLoading && !serverError && apiData &&
				<main className={styles.slides} style={{display: 'grid', gap: '20px 30px', gridTemplateColumns: 'repeat(auto-fill, minmax(183px, 1fr))'}}>
					{apiData.map(comic =>
						<Comic 
							key={comic.id}
							title={comic.title}
							issueNumber={comic.issueNumber}
							publishDate ={comic.publishDate}
							creators={comic.creators.items.length > 0 ? comic.creators.items : null}
							thumbnail={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
						/>
					)}
				</main>
			}
		</>
	)
}
