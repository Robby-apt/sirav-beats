import React from 'react';
import Ratings from './Ratings';
import BeatPlayer from './BeatPlayer';
import beats from '../../beats';

const playingBeat = beats.filter(function (beat) {
	return beat.playing === true;
})[0];

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
						<div className="controls">
							<BeatPlayer audio={playingBeat.audio} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CurrentlyPlaying;
