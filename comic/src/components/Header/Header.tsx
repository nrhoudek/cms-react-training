import Image from 'next/image'
import Navigation from './Navigation'
import styles from '../../styles/header/Header.module.css'

export default function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.logoContainer}>
				<Image
					src='/logo.svg'
					alt='Comic Closet Logo'
					fill
					priority
				/>
			</div>

			<Navigation />
		</header>
	)
}