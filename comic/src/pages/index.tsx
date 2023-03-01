import Head from 'next/head'
import { useState, useEffect, useContext } from 'react'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Comic } from './components/Comic/Comic'
import  Favorites from './components/Filter/Favorites'
import { ComicData } from './types/shared_types'
import { favoritesContext } from './context/favorites'
import { queryContext } from './context/query'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeroImage from './components/HeroImage/HeroImage'
import Intro from './components/Common/Intro'
import Filter from './components/Filter/Filter'
import useFetch from './hooks/useFetch'
import styles from '../styles/home/Home.module.css'

const md5 = require('md5');

//Runs this function serverside before build. Allows private API key to stay private.
export const getStaticProps: GetStaticProps = async() =>  {
	const timestamp: number = Date.now();
	const hash: string = md5(`${timestamp}${process.env.PRIVATE_API_KEY}${process.env.PUBLIC_API_KEY}`)

	let API_URL: string = `https://gateway.marvel.com:443/v1/public/comics?ts=${timestamp}&apikey=${process.env.PUBLIC_API_KEY}&hash=${hash}`
	return { props: { API_URL } }
}

export default function Home({ API_URL }: InferGetStaticPropsType<typeof getStaticProps>) {
	// const { query, setQuery } = useContext(queryContext);
	const { isLoading, serverError, comics } = useFetch(API_URL);
	const [query, setQuery] = useState<string>('');
	const [favorites, setFavorites] = useState<ComicData[]>([]);

	const contextValue = {
		favorites,
		setFavorites
	}

	useEffect(() => {
		if (query === '') {
			const { isLoading, serverError, comics } = useFetch(API_URL)
			console.log('YOOO')
		} else {
			const { isLoading, serverError, comics } = useFetch(query);
			console.log('Yeeeee')
		}
	}, [query])

	useEffect(() => {
		const favoriteComicsList = localStorage.getItem("Favorite_Comics");
		if (favoriteComicsList) {
			setFavorites(JSON.parse(favoriteComicsList));
		}
	}, []);

	function updateFilter(event: React.ChangeEvent) {
		const target = event.target as HTMLSelectElement;
		const value = target.value;

		let newUrl=`https://gateway.marvel.com/v1/public/characters/${value}/comics`
		setQuery(newUrl)
		console.log(query);
	}

	
	
	return (
		<>
			<Head>
				<title>Final Exercise</title>
				<meta name="description" content="Final Project for CMS React Training course" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<favoritesContext.Provider value={contextValue} >
				<Header />
				<HeroImage />

				<main className={styles.main}>
					<Intro />
					
					{isLoading && <h2>Loading Comics...</h2>}
					{serverError && !isLoading && <h2>Error Loading Comics</h2>}
					{!isLoading && !serverError && comics &&
					<div className={styles.gridContainer}>
						<Filter updateFilter={updateFilter}/>
						<div className={styles.slides}>
							{comics.map(comic =>
								<Comic 
									key={comic.id}
									comicData = {comic}
								/>
							)}
						</div>
						<div className={styles.desktopFavorites}>
							<Favorites handleCloseButtonClick={() => null} />
						</div>
					</div>
					}
				</main>
				
				<Footer />
			</favoritesContext.Provider>
		</>
	)
}
