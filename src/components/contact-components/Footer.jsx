import React from 'react';

const dateTime = new Date();

const currentYear = dateTime.getFullYear();

function Footer() {
	return (
		<footer>
			<p>
				Designed by <a href="#">Robin</a> All rights reserved &#169;{' '}
				{currentYear}
			</p>
		</footer>
	);
}

export default Footer;
