import styles from '../../styles/Footer.module.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
})

export default function Copyright() {
	const date = new Date()
	const year = date.getFullYear()

	return (
		<p className={`${styles.copyright} ${montserrat.variable}`}>Copyright {year}. Comic Closet, LLC. All rights reserved.</p>
	)
}