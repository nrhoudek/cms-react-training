import { useEffect, useState } from 'react'
import { ComicData } from '../types/shared_types'

// type Data = {
// 	id: number,
// 	title?: string,
// 	issueNumber?: number,
// 	publishDate?: {
// 		date?: string
// 	}[],
// 	creators?: {
// 		items?: {
// 			name?: string
// 		}
// 	}[],
// 	thumbnail?: {
// 		path?: string,
// 		extension?: string
// 	},
// }[]

export default function useFetch(url: string): {isLoading: boolean, ComicData: ComicData, serverError: string | unknown} {
	const [isLoading, setIsLoading] = useState(true);
	const [ComicData, setComicData] = useState<ComicData>([{id: 0}]);
	const [serverError, setServerError] = useState<string | unknown>('');

	const fetchData = async () => {
		try {
			const res = await fetch(url);
			const data = await res.json();
	
			setComicData(data.data.results);
			setIsLoading(false);
			console.log(data.data.results)
		} catch (error) {
			console.error(error);
			setServerError(error);
			setIsLoading(false);
		}
	};
	
	useEffect(() =>{
		fetchData();
	}, []);

	return { isLoading, ComicData, serverError };
};