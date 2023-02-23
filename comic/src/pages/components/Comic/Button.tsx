import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { ComicData } from '../../types/shared_types'
import { appContext, appContextType } from '../../context/index'
import styles from '../../../styles/comic/Comic.module.css'


type buttonProps = {
	comicData: ComicData;
}

type addToFavorites = {
	function(): void;
}
type removeFavorite = () => void;

export default function Button({ comicData }: buttonProps) {

	const context = useContext<appContextType>(appContext)

	function addToFavorites() {
		context.setFavorites(prevFavorites => {
			const newFavorites: ComicData[] = [...prevFavorites, {...comicData}]
			return newFavorites;
			console.log(newFavorites);
		});
	}
	
	return (
		<button
			className={styles.cta}
			onClick={addToFavorites}
		>
			<FontAwesomeIcon icon={faBoltLightning} className={styles.btnIcon} />
		</button>
	)
}