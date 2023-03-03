import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import styles from '../../../styles/filter/Filter.module.css'

import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
})

type FilterButton = {
	caption: string;
	icon: IconDefinition;
	handleClick : React.MouseEventHandler;
}

export default function FilterButton({ caption, icon, handleClick }: FilterButton) {
	return (
		<button 
			className={`${styles.filterButton} ${montserrat.variable}`}
			onClick={handleClick}
		>
			{caption}
			<FontAwesomeIcon icon={icon} />
		</button>
	)
}