import Image from 'next/image'
import Navigation from './Navigation'
import styles from '../../styles/Header.module.css'

export default function Header() {
	return (
		<header className={styles.headerContainer}>
			<Image
				src='/logo.svg'
				alt='Comic Closet Logo'
				width={75}
				height={75}
				priority
			/>

			<Navigation />
		</header>
	)
}