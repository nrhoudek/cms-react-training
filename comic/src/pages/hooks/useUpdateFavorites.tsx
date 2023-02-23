import { useEffect, useState } from 'react'
import { ComicData } from '../types/shared_types'

export default function useUpdateFavorites() {

	const [favorites, setFavorites] = useState<ComicData[]>([]);

	function handleAdd(newComic) {
		setFavorites(prev => [...prev, newComic ])
	}

	// function handleRemove(comicId) {

	// }

	useEffect(() => {
		useUpdateFavorites()
	}, [favorites])
}