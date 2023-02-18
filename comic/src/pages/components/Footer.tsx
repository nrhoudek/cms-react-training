import Image from 'next/image'
import FooterLink from './FooterLink'
import Copyright from './Copyright'


export default function Footer() {
	return( 
		<>
			<Image
				src='/logo.svg'
				alt='Comic Closet Logo'
				width={106}
				height={106}
			/>

			<div>
				<FooterLink url={'https://www.google.com'} caption={'Privacy Policy'}/>
				<span> | </span>
				<FooterLink url={'https://www.firefox.com'} caption={'Terms of Service'}/>
			</div>
				
			<Copyright />
		</>
	);
}
