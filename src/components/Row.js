import React, { useState, useEffect } from "react";
import { fetchResult } from '../api/apiCalls';
import { Link } from 'react-router-dom';
import Card from './Card';

function Row({title, fetchUrl}) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		let isCancelled = false;
		fetchResult(fetchUrl)
		.then(response => {  
			if(!isCancelled) {
				setMovies(response.data.results);
			}        
		})
		.catch(error => {console.log(error)});
		return () => {
      isCancelled = true;
    };
	},[fetchUrl]);

	return (
		<div className="mt-10">
			<h2 className="text-lg text-white">{title}</h2>
			<div className="flex flex-nowrap space-x-5 overflow-x-scroll py-4">
			
				{movies.map(movie => (
					<Link 
						to={`/details/movie/${movie.id}`}
						key={movie.id}
					>
						<Card movie={movie} />
					</Link>
				))}
				
			</div>
		</div>
	)
}

export default Row;