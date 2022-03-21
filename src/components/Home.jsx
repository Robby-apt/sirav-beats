import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';

function Home() {
	return (
		<div className="section" id="home">
			<div className="overlay">
				<Navbar />
				<Intro />
			</div>
		</div>
	);
}

export default Home;
