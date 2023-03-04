import { useState } from 'react'
import FilterButton from './FilterButton'
import FilterOptions from './FilterOptions'
import Favorites from './Favorites'
import { faBoltLightning, faFilter } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/filter/Filter.module.css'
import { montserrat } from '../../fonts/index'

type FilterProps = {
	updateFilter(event: React.ChangeEvent): void;
}

export default function Filter({ updateFilter }: FilterProps) {
	const [showFilterOptions, setShowFilterOptions] = useState<boolean>(false);
	const [showFavorites, setShowFavorites] = useState<boolean>(false);

	return (
		<>
			<div className={`${styles.filterContainer} ${montserrat.variable}`}>
				<div className={styles.mobileFilter}>
					<FilterButton caption={"Filter"} icon={faFilter} handleClick={() => {
							setShowFavorites(false);
							setShowFilterOptions(!showFilterOptions)
						}}
					/>
					<FilterButton caption={!showFavorites ? "Show Favorites" : "Hide Favorites"} icon={faBoltLightning} handleClick={() => {
							setShowFilterOptions(false)
							setShowFavorites(!showFavorites)
						}}
					/>
					{showFilterOptions &&
						<FilterOptions updateFilter={updateFilter} />
					}
					{showFavorites &&
						<Favorites handleCloseButtonClick={() => setShowFavorites(!showFavorites)}/>
					}
				</div>
				<div className={styles.desktopFilter}>
					<span className={styles.filterLabel}>Filter By: </span>
					<FilterOptions updateFilter={updateFilter} />
				</div>
			</div>
		</>
	)
}