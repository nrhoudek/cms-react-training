import Moment from 'react-moment';
import PropTypes from 'prop-types';
import styles from '@/styles/Comic.module.css'

import { Montserrat, Karla } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
})

const karla = Karla({
	subsets: ['latin'],
	variable: '--font-body',
})

export default function Detail(props) {
	const {title, issueNumber, publishDate, creators } = props

	return (
		<div className={styles.contentSection}>
			<h3 className={`${styles.slideTitle} ${montserrat.variable}`}>{title}</h3>
			<div className={`${styles.details} ${karla.variable}`}>
				<p><strong>Issue:</strong> {issueNumber}</p>
				<p><strong>Published:</strong> <Moment format="MMMM DD, YYYY">{publishDate}</Moment></p>
				{creators != null &&
					<p><strong>Creators:</strong> {creators.map(creator => creator.name).join(', ')}</p>
				}
			</div>
		</div>
	)
}

Detail.propTypes = {
	title: PropTypes.string,
	issueNumber: PropTypes.number,
	publishDate: PropTypes.string,
	creators: PropTypes.array
}