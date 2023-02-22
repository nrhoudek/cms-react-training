import styles from '../../styles/Intro.module.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
})

export default function Intro() {
	return (
		<section className={styles.introSection}>
			<h3 className={`${styles.subtitle} ${montserrat.variable}`}>New Comics!</h3>
			<h2 className={`${styles.title} ${montserrat.variable}`}>Coming out Daily</h2>
			<p className={`${styles.description} ${montserrat.variable}`}>
				Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
			</p>
		</section>
	)
}