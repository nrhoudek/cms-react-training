export default function Copyright() {
	const date = new Date()
	const year = date.getFullYear()

	return (
		<p>Copyright {year}. Comic Closet, LLC. All rights reserved.</p>
	)
}