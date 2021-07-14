import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';

const AllResults = () => {
	const location = useLocation();
  const allResults = location.state;
	const query = location.params;

	return (
		<div className="px-12 py-10 text-white">
			<h2 className="text-xl">
				All Results for
				<span className="font-bold">&nbsp;{query}</span>
			</h2>
			<div className="grid grid-cols-5 gap-4 mt-10">
				{allResults.length > 0 && (
					<>
						{allResults.map(result => (
							<Card movie={result} key={result.id} />
						))}
					</>
				)}
			</div>
		</div>
	)
}

export default AllResults;
