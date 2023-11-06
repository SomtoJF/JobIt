import { useState, useEffect } from "react";
import { RAPID_API_KEY } from "@env";
import axios from "axios";

const APIKEY = RAPID_API_KEY;

export default function useFetch(endpoint, query) {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const options = {
		method: "GET",
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			"X-RapidAPI-Key": APIKEY,
			"X-RapidAPI-Host": "jsearch.p.rapidapi.com",
		},
		params: { ...query },
	};

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await axios.request(options);
			setData(response.data.data);
		} catch (error) {
			setError(error);
			alert("An error occured");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		fetchData();
	};

	return { data, isLoading, error, refetch };
}
