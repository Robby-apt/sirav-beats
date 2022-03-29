import React from 'react';
import Ratings from './Ratings';

const customStyle = {
	backgroundImage: `url(/images/frank-septillion-Qrspubmx6kE-unsplash.jpg)`,
	backgroundPosition: `center`,
	backgroundSize: `cover`,
};

function CurrentlyPlaying() {
	return (
		<div className="currentlyPlaying sampleSubsection">
			<p className="sampleSubsectionTitle">Now Playing {`>`}</p>
			<div className="playingBeatSection" style={customStyle}>
				<div className="infoAndControls">
					<div className="info">
						<p>{}drc</p>
						<Ratings />
					</div>
				</div>
			</div>
		</div>
	);
}

export default CurrentlyPlaying;
