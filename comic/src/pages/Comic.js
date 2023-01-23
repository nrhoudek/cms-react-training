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
					className={styles.img}
					width={125}
					height={188}
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