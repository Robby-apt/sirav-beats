import React from 'react';
import Navbar from './home-components/Navbar';
import Intro from './home-components/Intro';

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
