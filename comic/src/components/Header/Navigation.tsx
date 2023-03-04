import { useState, useContext } from 'react'
import { favoritesContext, favoritesContextType } from '../../context/favorites'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning, faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/header/Navigation.module.css'
import { montserrat } from '../../fonts/index'

export default function Navigation() {
	const [showNav, setShowNav] = useState<boolean>(false);
	const context = useContext<favoritesContextType>(favoritesContext)

	function toggleNav(): void {
		setShowNav(prev => !prev);
	}

	return (
		<div className={`${styles.navigationContainer} ${montserrat.variable}`}>
			<nav className={showNav ? `${styles.mainNav} ${styles.active}` : `${styles.mainNav}`}>
				<a href="" target="_blank" className={styles.navLink}>Home</a>
				<a href="" target="_blank" className={styles.navLink}>Shop</a>
			</nav>
			<div className={styles.favoritesContainer}>
				<FontAwesomeIcon icon={faBoltLightning} />
				<span className={styles.favoritesCaption}>My Favorites</span>
				<span className={styles.favoritesNumber}>({context.favorites.length})</span>
			</div>
			<button className={styles.mobileMenuButton} onClick={toggleNav}>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</div>
	)
}