import { useContext } from 'react'
import Image from 'next/image'
import { favoritesContext, favoritesContextType } from '../../context/favorites'
import { ComicData } from '../../types/shared_types'
import Button from './Button'
import Detail from './Detail'
import styles from '../../../styles/comic/Comic.module.css'

type comicDataProps = {
	comicData: ComicData;
}

export default function Comic({ comicData }: comicDataProps) {
	if(!comicData) return null;

	const context = useContext<favoritesContextType>(favoritesContext)

	const isFavoritesFull: boolean = context.favorites.length >= 10;
	const isFavorite: ComicData = context.favorites.find(favorite => favorite.id === comicData.id);
	
	const thumbnailSrc = `${comicData.thumbnail.path}.${comicData.thumbnail.extension}`
	const altDescription = `${comicData.title} issue:${comicData.issueNumber} cover art`

	return (
		<div className={styles.slide} data-testid='comic-parent'>
			<Detail
				title={comicData.title}
				issueNumber={comicData.issueNumber}
				publishDate={comicData.dates[0].date}
				creators={comicData.creators}
			/>
			<div className={styles.imgCont}>
				<Image
					src={thumbnailSrc}
					alt={altDescription}
					className={styles.img}
					width={183}
					height={276}
				/>
				<Button 
					comicData={comicData}
					isFavorite={isFavorite}
					isFavoritesFull={isFavoritesFull}
				/>
			</div>
		</div>
	)
}