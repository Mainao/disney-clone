import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import Card from "./Card";

const Watchlist = () => {
	const { watchlist } = useContext(GlobalContext);
	console.log(watchlist);

	return (
		<div className="px-12 py-10 text-white">
			<h2 className="text-xl">My Watchlist</h2>
			<div className="grid grid-cols-5 gap-4 mt-10">
				{watchlist.map(movie => (
					<Card movie={movie} key={movie.id} />
				))}
			</div>
		</div>
	)
}

export default Watchlist;
