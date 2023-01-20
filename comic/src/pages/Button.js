import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

export default function Button() {
	return (
		<div>
			<button className="cta">
				<FontAwesomeIcon icon={faBolt} />
			</button>
		</div>
	)
}