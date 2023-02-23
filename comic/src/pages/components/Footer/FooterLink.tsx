import styles from '../../../styles/footer/Footer.module.css'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
})

type FooterLinkType = {
	url: string;
	caption: string;
}

export default function FooterLink({ url, caption }: FooterLinkType) {
	return (
		<a href={url} target='_blank'className={`${styles.link} ${montserrat.variable}`}>{caption}</a>
	)
}