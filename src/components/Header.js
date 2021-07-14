import React from 'react';
import logo from '../logo.svg';
import Search from './Search';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className="bg-gray-900">
			<div className="px-12 flex space-x-10 items-center">
				<img src={logo} alt="Disney logo" className="h-20 w-20"/>
				<div className="flex flex-grow justify-between items-center">
					<ul className="flex space-x-8 text-gray-300 capitalize">
						<li>
							<Link to="/">home</Link>
						</li>
						<li>
							<Link to="/watchlist">watchlist</Link>
						</li>
					</ul>
					<div className="flex space-x-10">
						<Search /> 
						{/* <p className="text-white">Profile</p> */}
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header;