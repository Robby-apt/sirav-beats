import React from 'react';
import Ratings from './Ratings';
import beats from '../../beats';

const playingBeats = beats.filter(function (beat) {
	return beat.playing === true;
});

const playingBeat = playingBeats[0];

console.log(playingBeat);

const customStyle = {
	backgroundImage: `url(${playingBeat.cover})`,
	backgroundPosition: `center`,
	backgroundSize: `cover`,
};

function CurrentlyPlaying() {
	return (
		<div className="currentlyPlaying sampleSubsection">
			<p className="sampleSubsectionTitle">Now Playing {`>`}</p>
			<div className="playingBeatSection" style={customStyle}>
				<div className="playerOverlay">
					<div className="infoAndControls">
						<div className="info">
							<p>{playingBeat.title}</p>
							<Ratings />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CurrentlyPlaying;
