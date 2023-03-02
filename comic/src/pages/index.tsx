import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
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
	const publicKey: string = process.env.PUBLIC_API_KEY
	const requiredParameters = `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

	let API_URL: string = `https://gateway.marvel.com/v1/public/comics?${requiredParameters}`
	return { props: { API_URL, requiredParameters } }
}

export default function Home({ API_URL, requiredParameters }: InferGetStaticPropsType<typeof getStaticProps>) {
	const [query, setQuery] = useState<string>(API_URL);
	const { isLoading, serverError, comics } = useFetch(query);
	const [favorites, setFavorites] = useState<ComicData[]>([]);
	const [characterId, setCharacterId] = useState<string>('');
	const [creatorId, setCreatorId] = useState<string>('');
	let initialRender = useRef(true);

	useEffect(() => {
		const favoriteComicsList = localStorage.getItem("Favorite_Comics");
		if (favoriteComicsList) {
			setFavorites(JSON.parse(favoriteComicsList));
		}
	}, []);

	useEffect(() => {
		if (!initialRender.current) {
			let newQuery: string;

			if (characterId !== '' && creatorId === '') {
				newQuery=`https://gateway.marvel.com/v1/public/characters/${characterId}/comics?${requiredParameters}`
			} else if (characterId === '' && creatorId !== '') {
				newQuery=`https://gateway.marvel.com/v1/public/creators/${creatorId}/comics?${requiredParameters}`
			} else if (characterId !== '' && creatorId !== '') {
				newQuery = `https://gateway.marvel.com/v1/public/creators/${creatorId}/comics?characters=${characterId}&${requiredParameters}`
			}
			else {
				newQuery = API_URL;
			}
			setQuery(newQuery);
		}

		//Prevents this useEffect from Running on first render with a new empty query. We run our first render from the server getStaticProps function
		return () => {
			initialRender.current = false;
		}
	}, [characterId, creatorId])

	function updateFilter(event: React.ChangeEvent) {
		const target = event.target as HTMLSelectElement;
		const id = target.value;
		const name = target.name;

		name === 'characterFilter' ? setCharacterId(id) : setCreatorId(id)
	}

	const contextValue = {
		favorites,
		setFavorites
	}

	return (
		<>
			<Head>
				<title>Final Exercise</title>
				<meta name="description" content="Final Project for CMS React Training course" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<favoritesContext.Provider value={contextValue}>
				<Header />
				<HeroImage />

				<main className={styles.main}>
					<Intro />

					{isLoading && <h2>Loading Comics...</h2>}
					{serverError && !isLoading && <h2>Error Loading Comics</h2>}
					{!serverError && !isLoading && comics.length === 0 && <h2>No comics match filter requirements</h2>}
					{!serverError && !isLoading && comics &&
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
