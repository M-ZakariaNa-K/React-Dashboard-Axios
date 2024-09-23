import React, { useState, useEffect } from 'react';
import './Header1.css';
import "../../App.css";
import Sidebar from '../Sidebar/Sidebar'; // Import Header to include the sidebar
import profileImage from '../../assets/img/people.png';

const Header1 = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar visibility
	const [isDarkMode, setIsDarkMode] = useState(false); // State to manage dark mode

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
	};
	const toggleDarkMode = () => {
		setIsDarkMode(prevMode => !prevMode);
		document.body.classList.toggle('dark', !isDarkMode); // Toggle dark class on body
	};
	useEffect(() => {
		document.body.classList.toggle('dark', isDarkMode); // Apply dark mode on initial render
	}, [isDarkMode]);

	return (
		<div className="hero-main">
			{/* NAVBAR */}
			<nav>
				<i className='bx bx-menu' onClick={toggleSidebar}></i> {/* Menu button toggles sidebar */}
				<a href="#" className="nav-link">Categories</a>
				<form action="#">
					<div className="form-input">
						<input type="search" placeholder="Search..." />
						<button type="submit" className="search-btn"><i className='bx bx-search'></i></button>
					</div>
				</form>
				<input type="checkbox" id="switch-mode" hidden checked={isDarkMode}
					onChange={toggleDarkMode} />
				<label htmlFor="switch-mode" className="switch-mode"></label>
				<a href="#" className="notification">
					<i className='bx bxs-bell'></i>
					<span className="num">8</span>
				</a>
				<a href="#" className="profile">
					<img src={profileImage} alt='img' />
				</a>
			</nav>

			{/* Pass sidebar state to Header component */}
			<Sidebar isSidebarOpen={isSidebarOpen} />
		</div>
	);
};

export default Header1;
