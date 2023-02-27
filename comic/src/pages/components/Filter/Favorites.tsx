import { useContext } from 'react'
import { favoritesContextType, favoritesContext } from '../../context/favorites'
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

	const context = useContext<favoritesContextType>(favoritesContext)

	return (
			<div className={styles.favoritesContainer}>
				<div className={styles.inner}>
					<h2 className={`${styles.favoritesTitle} ${montserrat.variable}`}>Favorites</h2>
					<div className={styles.comicGrid}>
						{
							context.favorites.map((comic) => {
								return (
									<FavoritesItem 
										key={comic.id}
										id={comic.id}
										title={comic.title}
										issueNumber={comic.issueNumber}
										thumbnail={comic.thumbnail}
									/>
								)
							})
						}
					</div>
				</div>
				<button
					className={`${styles.closeButton} ${montserrat.variable}`}
					onClick={handleCloseButtonClick}
				>
					Hide Favorites
					<FontAwesomeIcon icon={faBoltLightning} />
				</button>
			</div>
			
			
	)
}