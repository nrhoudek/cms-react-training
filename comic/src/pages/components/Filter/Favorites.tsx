import { useContext } from 'react'
import { appContextType, appContext } from '../../context/index'
import FavoritesItem from './FavoritesItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/filter/Favorites.module.css'

import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
})

type FavoritesProps = {
	handleCloseButtonClick: React.MouseEventHandler
}

export default function Favorites({handleCloseButtonClick}: FavoritesProps) {

	const context = useContext<appContextType>(appContext)

	return (
		<>
			<div className={styles.favoritesContainer}>
				<h2 className={`${styles.favoritesTitle} ${montserrat.variable}`}>Favorites</h2>
			</div>
			<div>
				{
					context.favorites.map((comic) => {
						return (
							<FavoritesItem 
								key={comic.id}
								// id={comic.id}
								// title={comic.title}
								// issue={comic.issueNumber}
								// thumbnail={comic.thumbnail}
							/>
						)
					})
				}
			</div>
			<button
				className={`${styles.closeButton} ${montserrat.variable}`}
				onClick={handleCloseButtonClick}
			>
				Hide Favorites
				<FontAwesomeIcon icon={faBoltLightning} />
			</button>
		</>
	)
}