import Image from 'next/image'
import Button from './Button'
import Detail from './Detail'
import styles from '../../styles/Comic.module.css'
import {ComicCreator, Date, ComicThumbnail} from '../types/shared_types'

type Props = {
	key: number,
	id: number,
	title?: string,
	issueNumber?: number,
	publishDate?: Date[],
	creators?: ComicCreator,
	thumbnail?: ComicThumbnail
}

export function Comic(props: Props) {
	const {id, title, issueNumber, publishDate, creators, thumbnail} = props
	const thumbnailSrc = `${thumbnail.path}.${thumbnail.extension}`
	const altDescription = `${title} issue:${issueNumber} cover art`

	return (
		<div className={styles.slide}>
			<Detail
				key={id}
				title={title}
				issueNumber={issueNumber}
				publishDate={publishDate}
				creators={creators}
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