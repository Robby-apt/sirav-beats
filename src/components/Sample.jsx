import React from 'react';
import CurrentlyPlaying from './sample-components/CurrentlyPlaying';
import OtherBeats from './sample-components/OtherBeats';

function Sample() {
	return (
		<div className="section" id="sample">
			<CurrentlyPlaying />
			<OtherBeats />
		</div>
	);
}

export default Sample;
