import Image from 'next/image'
import Button from './Button'
import Detail from './Detail'
import PropTypes from 'prop-types';
import styles from '@/styles/Comic.module.css'

export function Comic(props) {
	const {id, title, issueNumber, publishDate, creators, thumbnail} = props
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
					src={thumbnail}
					alt={altDescription}
					fill
					size="(min-width: 1024px) 100vw, 50vw"
					priority
				/>
				<Button />
			</div>
		</div>
	)
}

Detail.propTypes = {
	key: PropTypes.number,
	title: PropTypes.string,
	issueNumber: PropTypes.number,
	publishDate: PropTypes.string,
	creators: PropTypes.array
}