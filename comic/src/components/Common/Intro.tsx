import styles from '../../styles/common/Intro.module.css'
import { montserrat } from '../../fonts/index'

export default function Intro() {
	return (
		<section className={`${styles.introSection} ${montserrat.variable}`}>
			<h3 className={styles.subtitle}>New Comics!</h3>
			<h2 className={styles.title}>Coming out Daily</h2>
			<p className={styles.description}>
				Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
			</p>
		</section>
	)
}