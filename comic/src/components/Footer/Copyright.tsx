import styles from '../../styles/footer/Footer.module.css'
import { montserrat } from '../../fonts/index'

export default function Copyright() {
	const date = new Date()
	const year = date.getFullYear()

	return (
		<p className={`${styles.copyright} ${montserrat.variable}`}>Copyright {year}. Comic Closet, LLC. All rights reserved.</p>
	)
}