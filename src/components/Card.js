import React from 'react';
import placeholder from '../assets/placeholder.png';

const Card = ({movie}) => {
	return (
		<div 
			className="relative group bg-gray-900 relative cursor-pointer flex-none flex items-end w-64 h-40 rounded-md transition duration-300 ease-in-out transform hover:scale-110 bg-cover"
			style={{backgroundImage: movie.backdrop_path == null ? `url(${placeholder})` : `url(${process.env.REACT_APP_IMAGE_URL}${movie.backdrop_path})`}}
		>
			<div
				className="absolute inset-0 flex items-end rounded-md transition duration-300 ease-in-out transform text-transparent group-hover:text-gray-300 bg-gradient-to-b hover:from-transparent hover:to-gray-800"
			> 
			
				<div className="flex-col justify-end p-4 z-50 ">
					<p className="text-sm">{movie.original_title || movie.name}</p>
					<p className="text-xs">{movie.overview.slice(0,75)}...</p>
				</div>

			</div>

		</div>
	)
}

export default Card;
