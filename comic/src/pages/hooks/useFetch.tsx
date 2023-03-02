import { useEffect, useState, useContext } from 'react'
import { queryContext, queryContextType } from '../context/query';
import { ComicData } from '../types/shared_types'

export default function useFetch(url: string): {isLoading: boolean, comics: ComicData[], serverError: string | unknown} {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [serverError, setServerError] = useState<string | unknown>('');
	const [comics, setComics] = useState<ComicData[]>([]);

	// let context = useContext<queryContextType>(queryContext)
	// console.log('query hiho', context.query)
	// console.log(url)

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
	}, [url]);

	return { isLoading, comics, serverError };
};