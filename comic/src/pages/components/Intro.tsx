import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
})

export default function Intro() {
	return (
		<div>
			<h3>New Comics!</h3>
			<h2>Coming out Daily</h2>
			<p>
				Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.
			</p>
		</div>
	)
}