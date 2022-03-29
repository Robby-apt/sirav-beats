import React from 'react';
import BeatsListItem from './BeatsListItem';
import beats from '../../beats';

function createBeat(beat) {
	if (beat.playing == false) {
		return (
			<BeatsListItem
				key={beat.id}
				cover={beat.cover}
				title={beat.title}
			/>
		);
	}
}

function OtherBeats() {
	return (
		<div className="otherBeatsSection sampleSubsection">
			<p className="sampleSubsectionTitle">Other Beats {`>`}</p>
			<div className="otherBeatsList">{beats.map(createBeat)}</div>
		</div>
	);
}

export default OtherBeats;
