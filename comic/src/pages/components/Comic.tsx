import Image from 'next/image'
import Button from './Button'
import Detail from './Detail'
import styles from '../../styles/Comic.module.css'
import {ComicData} from '../types/shared_types'

type comicDataProps = {
	comicData: ComicData
}

export function Comic({ comicData }: comicDataProps) {
	if(!comicData) return null;
	
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
					width={125}
					height={188}
				/>
				<Button />
			</div>
		</div>
	)
}