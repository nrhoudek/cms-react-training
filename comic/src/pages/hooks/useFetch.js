import { useEffect, useState } from 'react'

export default function useFetch(url) {
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