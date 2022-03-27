import React from 'react';

function Navbar() {
	return (
		<nav className="navbar">
			<div className="branding">
				<img src="/images/Logo.svg" alt="brandLogo" className="brandLogo" />
				<p className="brandName">srv</p>
			</div>

			<div className="navLinks">
				<a href="#home" className="active">Home</a>
				<a href="#sample">Sample</a>
				<a href="#contact">Contact</a>
			</div>
		</nav>
	);
}

export default Navbar;
