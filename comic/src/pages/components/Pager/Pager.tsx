import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/pager/Pager.module.css'
import { Karla } from '@next/font/google'

const karla = Karla({
	subsets: ['latin'],
	variable: '--font-body',
})

type PagerProps = {
	firstComicIndex: number;
	totalComics: number;
	handlePagination: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void
}

export default function Pager({firstComicIndex, totalComics, handlePagination}: PagerProps) {
	const firstIndex = totalComics > 0 ? firstComicIndex + 1 : 0
	const lastIndex = firstComicIndex + 15 > totalComics ? totalComics : firstComicIndex + 15

	return (
		<div className={styles.pagerContainer}>
			<div className={styles.inner}>
				<button className={styles.pagerButton} name="prev" onClick={event => handlePagination(event)}>
					<FontAwesomeIcon icon={faAngleLeft} aria-hidden="true"/>
				</button>
				<span className={`${styles.pagerInfo} ${karla.variable}`}>{firstIndex}-{lastIndex} of {totalComics}</span>
				<button className={styles.pagerButton} name="next" onClick={event => handlePagination(event)}>
					<FontAwesomeIcon icon={faAngleRight} aria-hidden="true"/>
				</button>
			</div>
		</div>
	)
}