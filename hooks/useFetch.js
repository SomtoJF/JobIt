import { useState, useEffect } from "react";
import { RAPID_API_KEY } from "@env";
import axios from "axios";
import fallbackData from "../datastore/homeData.json";

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
			const data = response.data.data;
			setData(data);
		} catch (error) {
			setError(error);
			setData(JSON.parse(fallbackData));
			alert("An error occured, using fallback data");
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

const useFetchJobDetails = (query) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const options = {
		method: "GET",
		url: "https://jsearch.p.rapidapi.com/job-details",
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
};

export { useFetchJobDetails };

const storeLocalData = async (absoluteFilepath, data) => {
	try {
		const response = await axios.post("http://localhost:3000", {
			filepath: absoluteFilepath,
			data: data,
		});
		console.log(response);
	} catch (err) {
		throw err;
	}
};
