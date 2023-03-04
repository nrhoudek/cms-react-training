import { Montserrat, Karla } from '@next/font/google'

export const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-display',
	display: 'swap'
})

export const karla = Karla({
	subsets: ['latin'],
	variable: '--font-body',
	display: 'swap'
})