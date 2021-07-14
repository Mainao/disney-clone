import React, { useContext }  from 'react';
import { GlobalContext } from "../context/GlobalState";
import toast, { Toaster } from 'react-hot-toast';

const DetailCard = ({movie}) => {
	const notify = (message) => toast(message, {duration: 1000});

	const {
    addToWatchList,
		removeFromWatchList,
    watchlist,
  } = useContext(GlobalContext);

	let storedMovie = watchlist.find((o) => o.id === movie.id);

	const presentInWatchlist = storedMovie ? true : false;

	const addToWatchListBtn = 
		<button onClick={() => {
			addToWatchList(movie);
			notify("Added to watchlist!");
		}}>
			+ Add to Watchlist
		</button>
	
	const removeFromWatchListBtn =
		<button onClick={() => {
			removeFromWatchList(movie.id);
			notify("Removed from watchlist!");
		}}>
			Remove from Watchlist
		</button>

	return (
		<div 
			className="relative container mx-auto h-96 bg-gray-700 mt-10 rounded-md bg-cover grid grid-cols-2"
		>
			<Toaster />
			<div className="relative px-12 py-10 w-full flex flex-col justify-between text-gray-300 relative z-50 bg-gray-800 ">
				<div className="flex flex-col gap-y-3">
					<p className="text-2xl">{movie.title}</p>
					<p>
						{movie.runtime} 
						{movie.release_date.slice(0,4)}
						{movie.genres.map(item => (
							<span key={item.id}>{item.name}</span>
						))}
					</p>
					<p>
						{movie.overview}
					</p>
				</div>
				<div className="flex justify-between">
					<div>
						<p className="font-bold">Watch</p>
					</div>
					{presentInWatchlist ? removeFromWatchListBtn : addToWatchListBtn }
				</div>
			</div>
		
			<div 
				className="relative"
			>
				<div
					className="absolute top-0 left-0 w-1/2 h-full"
					style={{backgroundImage: `linear-gradient(to right, rgba(31, 41, 55), rgba(17, 24, 39, 0))`}}
				>
				</div>
				<img src={`${process.env.REACT_APP_IMAGE_URL}${movie.backdrop_path}`} alt="" className="h-96 z-40" />
			</div>
		</div>
	)
}

export default DetailCard;
