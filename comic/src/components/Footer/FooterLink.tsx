import styles from '../../styles/footer/Footer.module.css'
import { montserrat } from '../../fonts/index'

type FooterLinkType = {
	url: string;
	caption: string;
}

export default function FooterLink({ url, caption }: FooterLinkType) {
	return (
		<a href={url} target='_blank'className={`${styles.link} ${montserrat.variable}`}>{caption}</a>
	)
}