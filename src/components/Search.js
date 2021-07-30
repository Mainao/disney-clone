import React, { useState, useEffect } from 'react';
import requests from "../api/requests";
import placeholder from "../assets/placeholder.png";
import { fetchResult } from '../api/apiCalls';
import useDebounce from '../use-debounce';
import { Link } from 'react-router-dom';
import { useHistory, withRouter} from 'react-router-dom';
import useVisible from "../useVisible";

const Search = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [results, setResults] = useState([]);
	const [allResults, setAllResults] = useState([]);
	const debouncedSearchQuery = useDebounce(searchQuery, 1000);
	const { ref, isVisible, setIsVisible } = useVisible(false);

	useEffect(() => {
		if (debouncedSearchQuery) {
			//Fire off our API call
			fetchResult(`${requests.search}${debouncedSearchQuery}`).then(res => {
				//Set results state
				if(res.data.results.length > 0) {
					setResults(res.data.results.slice(0,5));
					setAllResults(res.data.results);
					setIsVisible(true);
				}
			});
		} else {
			setResults([]);
		}
	}, [debouncedSearchQuery, setIsVisible]);

	const history = useHistory();

  const fetchAllResults = (query, data) => {
		setIsVisible(!isVisible);
    history.push({
      pathname: '/all-results',
      state: data,
			params: query,
    });
  }

	return (
		<div className="relative">
			<input 
				className="w-64 h-8 text-white text-sm border-b ring-0 focus:ring-0 bg-transparent transition-all mr-0 focus:outline-none focus:border-blue-500 focus:w-96 duration-300" 
				type="search" 
				placeholder="Search..."
				value={searchQuery}
				onChange={(e) => {
					setSearchQuery(e.target.value);
				}}
				ref={ref}
			/>
			{ isVisible && (
				<ul className="absolute bg-gray-900 text-white w-full px-2 z-10" 	ref={ref}>
					{results.map(item => (
						<Link 
							to={`/details/movie/${item.id}`}
							key={item.id}
						>
							<li className="bg-gray-800 my-2 h-20 rounded-md flex space-x-4 items-center">
								<img 
									src={item.poster_path == null ? `${placeholder}` : `${process.env.REACT_APP_IMAGE_URL}${item.poster_path}`} 
									alt="" 
									className="w-36 flex-shrink-0 h-full rounded-l-md object-cover" 
									loading="lazy"
								/>
								<p className="text-xs">{item.title}</p>
							</li>
						</Link>
					))}
					<li className="bg-gray-800 my-2 py-2 rounded-md flex justify-center items-center">
						<button 
							className="text-sm hover:text-gray-300" 
							onClick={
								() => fetchAllResults(searchQuery, allResults)
							}
						>
							See All Results
						</button>
					</li>
				</ul>
			)}
		</div>
	)
}

export default withRouter(Search);
