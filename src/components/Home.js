import React from 'react';
import ImgSlider from './ImgSlider';
import Row from './Row.js';
import scale from '../assets/scale.png';
import pixar from '../assets/pixar.png';
import marvel from '../assets/marvel.png';
import starwars from '../assets/starwars.png';
import natgeo from '../assets/natgeo.png';
import requests from "../api/requests";

const Home = () => {
	return (
		<>
			<div className="container mx-auto my-10 rounded-md overflow-hidden bg-gray-800" style={{height:326}}>
				<ImgSlider />
			</div>

			<div className="container mx-auto py-10">
				<div className="grid grid-cols-5 gap-8">
					<div className="border-2 flex-shrink-0 h-32 border-gray-400 rounded-md bg-transparent transition duration-500 transform hover:scale-110">
						<img src={scale} alt="disney" className="h-32" />
					</div>
					<div className="border-2 flex-shrink-0 h-32 border-gray-400 rounded-md bg-transparent transition duration-500 transform hover:scale-110">
						<img src={pixar} alt="disney" className="h-32"/>
					</div>
					<div className="border-2 flex-shrink-0 h-32 border-gray-400 rounded-md bg-transparent transition duration-500 transform hover:scale-110">
						<img src={marvel} alt="disney" className="h-32"/>
					</div>
					<div className="border-2 flex-shrink-0 h-32 border-gray-400 rounded-md bg-transparent transition duration-500 transform hover:scale-110">
						<img src={starwars} alt="disney" className="h-32"/>
					</div>
					<div className="border-2 flex-shrink-0 h-32 border-gray-400 rounded-md bg-transparent transition duration-500 transform hover:scale-110">
						<img src={natgeo} alt="disney" className="h-32"/>
					</div>
				</div>

				<Row title="Trending" fetchUrl={requests.fetchTrending} />
				<Row title="Originals" fetchUrl={requests.fetchNetflixOriginals} />
				<Row title="New to Disney+" fetchUrl={requests.fetchNew} />

			</div>
		</>
	)
}

export default Home;