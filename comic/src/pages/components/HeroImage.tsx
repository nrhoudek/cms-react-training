import Image from 'next/image'

import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
})

export default function HeroImage() {
return (
	<>
		<Image
			src='/hero-photo.png'
			alt='Collage of Comic Books from the angle of a person looking down at their feet'
			width={375}
			height={450}
		/>
		<div>
			<h1>Comic Closet</h1>
		</div>
	</>
)
}