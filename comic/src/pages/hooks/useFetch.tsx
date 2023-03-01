import { useEffect, useState, useContext } from 'react'
import { ComicData } from '../types/shared_types'

export default function useFetch(url: string): {isLoading: boolean, comics: ComicData[], serverError: string | unknown} {
	const [isLoading, setIsLoading] = useState(true);
	const [comics, setComics] = useState<ComicData[]>([]);
	const [serverError, setServerError] = useState<string | unknown>('');

	const fetchData = async () => {
		try {
			const res = await fetch(url);
			const data = await res.json();
	
			setComics(data.data.results);
			setIsLoading(false);
			console.log(data.data.results)
		} catch (error) {
			console.error(error);
			setServerError(error);
			setIsLoading(false);
		}
	};
	
	useEffect(() => {
		fetchData();
	}, []);

	return { isLoading, comics, serverError };
};