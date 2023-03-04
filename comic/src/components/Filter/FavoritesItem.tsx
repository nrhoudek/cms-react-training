import { useContext } from 'react'
import Image from 'next/image'
import { favoritesContext, favoritesContextType } from '../../context/favorites'
import { ComicData, ComicThumbnail } from '../../types/shared_types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/filter/FavoritesItem.module.css'
import { karla } from '../../fonts/index'

type FavoriteItemProp = {
	key: number;
	id: number;
	title: string;
	issueNumber: number;
	thumbnail: ComicThumbnail;
}

type removeFromFavorites = () => void;


export default function FavoritesItem( props: FavoriteItemProp ) {
	const { id, title, issueNumber, thumbnail } = props

	const context = useContext<favoritesContextType>(favoritesContext)

	const thumbnailSrc = `${thumbnail.path}.${thumbnail.extension}`
	const altDescription = `${title} issue:${issueNumber} cover art`

	function removeFromFavorites(): removeFromFavorites {
		context.setFavorites(prevFavorites => {
			const newFavorites: ComicData[] = [...prevFavorites]
			const index: number = prevFavorites.findIndex(favorite => favorite.id === id);
			newFavorites.splice(index, 1);
			localStorage.setItem(
				"Favorite_Comics",
				JSON.stringify(newFavorites)
			);
			return newFavorites;
		});
		return;
	}

	return (
		<div className={styles.slide}>
			<div className={styles.imgCont}>
				<Image
					src={thumbnailSrc}
					alt={altDescription}
					className={styles.img}
					width={50}
					height={75}
				/>
				<button
					className={styles.removeButton}
					onClick={removeFromFavorites}
				>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			</div>
			<div className={`${styles.contentSection} ${karla.variable}`}>
				<h3 className={styles.slideTitle}>{title}</h3>
				<span className={styles.issueNumber}>Issue: {issueNumber}</span>
			</div>
		</div>
	)
}