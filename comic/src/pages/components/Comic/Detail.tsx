import Moment from 'react-moment';
import styles from '../../../styles/comic/Comic.module.css'
import {ComicCreator, CreatorItem} from '../../types/shared_types'
import { Montserrat, Karla } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
})

const karla = Karla({
	subsets: ['latin'],
	variable: '--font-body',
})

type DetailProps = {
	title: string,
	issueNumber: number,
	publishDate: string,
	creators: ComicCreator
}

export default function Detail(props: DetailProps) {
	const {title, issueNumber, publishDate, creators } = props

	return (
		<div className={styles.contentSection}>
			<h3 className={`${styles.slideTitle} ${montserrat.variable}`} data-testid='comic-title'>{title}</h3>
			<div className={`${styles.details} ${karla.variable}`}>
				<p data-testid='comic-issueNumber'>
					<strong>Issue: </strong>
					{issueNumber}
				</p>
				<p data-testid='comic-publishDate'>
					<strong>Published: </strong>
					<Moment format="MMMM DD, YYYY">{publishDate}</Moment>
				</p>
				{creators.items.length > 1 &&
					<p data-testid='comic-creators'>
						<strong>Creators: </strong>
						{creators.items.map((creator: CreatorItem) => creator.name).join(', ')}
					</p>
				}
			</div>
		</div>
	)
}