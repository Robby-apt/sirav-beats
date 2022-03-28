import React from 'react';

function MediaLink(props) {
	return (
		<div className="mediaItem">
			<a href={props.socialLink}>
				<i className={props.icon} />
			</a>
			<a href={props.socialLink} className="mediaHandle">{props.userName}</a>
		</div>
	);
}

export default MediaLink;
