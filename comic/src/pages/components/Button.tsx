import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/Comic.module.css'

export default function Button() {
	return (
		<button className={styles.cta}>
			<FontAwesomeIcon icon={faBoltLightning} className={styles.btnIcon} />
		</button>
	)
}