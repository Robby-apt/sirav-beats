import React from 'react';

function Intro() {
	return (
		<div className="introSection">
			<p className="sublime sublimeFirst">PAY THE PIPER</p>

			<div className="mainIntro">
				<p className="heading">SIRAV BEATS</p>
				<p className="subHeading">Music Producer</p>
				<a href="#sample">
					<button className="actionBtn">
						Listen to some samples
					</button>
				</a>
			</div>

			<p className="sublime sublimeSecond">CALL THE TUNE</p>
		</div>
	);
}

export default Intro;
