import React from 'react';
import Ratings from './Ratings';

function BeatsListItem(props) {
	return (
		<div className="beatItem">
			<i className="fa-solid fa-list beatIcon" />
			<img src={props.cover} alt={props.title} className="imgCover" />
			<div className="beatItemInfo">
				<p className="beatName">{props.title}</p>
				<Ratings />
			</div>
			<i className="fa-regular fa-circle-play playIcon" />
		</div>
	);
}

export default BeatsListItem;
