import { useState } from 'react'
import FilterButton from './FilterButton'
import Favorites from './Favorites'
import { faBoltLightning, faFilter } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/filter/Filter.module.css'

import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
})

export default function Filter() {
	const [showFilter, setShowFilter] = useState<boolean>(false);
	const [showFavorites, setShowFavorites] = useState<boolean>(false);

	return (
		<>
			<div className={styles.filterContainer}>
				<FilterButton caption={"Filter"} icon={faFilter} handleClick={() => setShowFilter(!showFilter)} />
				<FilterButton caption={!showFavorites ? "Show Favorites" : "Hide Favorites"} icon={faBoltLightning} handleClick={() => setShowFavorites(!showFavorites)}/>
			</div>
			{showFavorites &&
				<Favorites handleCloseButtonClick={() => setShowFavorites(!showFavorites)}/>
			}
		</>
	)
}