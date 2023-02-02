import { useEffect, useState } from 'react'

type Data = {
	isLoading: boolean,
	apiData: {
		key: number,
		title: string,
		issueNumber: number,
		publishDate: string,
		creators: string[],
		thumbnail: string,
	},
	serverError: string
}

export default function useFetch(url: string): Data {
	const [isLoading, setIsLoading] = useState(false);
	const [apiData, setApiData] = useState(null);
	const [serverError, setServerError] = useState(null);

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const res = await fetch(url);
			const data = await res.json();
	
			setApiData(data.data.results);
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

	return { isLoading, apiData, serverError };
};