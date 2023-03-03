import Image from 'next/image'
import styles from '../../../styles/hero/HeroImage.module.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
})

export default function HeroImage() {
return (
	<section className={styles.heroContainer}>
		<Image
			src='/hero-photo.png'
			alt='Collage of Comic Books from the angle of a person looking down at their feet'
			className={styles.heroImage}
			fill
			priority
		/>
		
		<h1 className={`${styles.heroTitle} ${montserrat.variable}`}>Comic Closet</h1>
	</section>
)
}