import { useEffect, useState } from 'react'
import { ComicData } from '../types/shared_types'

export default function useFetch(url: string): {isLoading: boolean, comics: ComicData[], total: number, serverError: string | unknown} {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [serverError, setServerError] = useState<string | unknown>('');
	const [comics, setComics] = useState<ComicData[]>([]);
	const [total, setTotal] = useState<number>(0);

	const fetchData = async () => {
		try {
			const res = await fetch(url);
			const data = await res.json();
	
			setComics(data.data.results);
			setTotal(data.data.total)
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setServerError(error);
			setIsLoading(false);
		}
	};
	
	useEffect(() => {
		fetchData();
	}, [url]);

	return { isLoading, comics, total, serverError };
};