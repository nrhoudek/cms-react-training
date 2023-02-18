import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
	return (
		<>
			<Image
				src='/logo.svg'
				alt='Comic Closet Logo'
				width={75}
				height={75}
			/>

			<div>
				<FontAwesomeIcon icon={faBoltLightning} />
				<span>(0)</span>
			</div>
			<button>
				<FontAwesomeIcon icon={faBars} />
			</button>
		</>
	)
}