import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/Navigation.module.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
})

export default function Navigation() {
	const [showNav, setShowNav] = useState(false);

	function toggleNav() {
		setShowNav(!showNav);
	}

	return (
		<div className={`${styles.navigationContainer} ${montserrat.variable}`}>
			<nav className={styles.mainNav}>
				<a href="" target="_blank" className={styles.navLink}>Home</a>
				<a href="" target="_blank" className={styles.navLink}>Shop</a>
			</nav>
			<div className={styles.favoritesContainer}>
				<FontAwesomeIcon icon={faBoltLightning} />
				<span className={styles.favoritesCaption}>My Favorites</span>
				<span className={styles.favoritesNumber}>(0)</span>
			</div>
			<button className={styles.mobileMenuButton} onClick={toggleNav}>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</div>
	)
}