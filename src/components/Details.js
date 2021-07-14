import React, { useState, useEffect } from 'react';
import requests from "../api/requests";
import axios from '../api/axios';
import { useParams } from "react-router-dom";
import DetailCard from "./DetailCard";

const API_KEY = "af0a64fde1a89e1ee5d1cfb03232d035";

const Details = () => {
	const { id } = useParams();
	const [details, setDetails] = useState([]);

	useEffect(() => {
		async function fetchDetails() {
			const request = await axios.get(`${requests.fetchDetails}/${id}?api_key=${API_KEY}`);
			setDetails(request.data);
			return request; 
		}
		fetchDetails();
	},[id]);

	return (
		<>
		  {details.length !== 0 && (
				<DetailCard movie={details} />
			)}
	
		</>
	)
}

export default Details;
