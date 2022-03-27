import React from 'react';
import MediaLink from './MediaLink';
import mediaLinks from '../../socialMedia';

function createMediaLink(mediaLink) {
	return (
		<MediaLink
			key={mediaLink.id}
			socialLink={mediaLink.socialLink}
			icon={mediaLink.icon}
			userName={mediaLink.userName}
		/>
	);
}

function MainContact() {
	return (
		<div className="contactArea">
			<div className="contactOverlay">
				<div className="socialIcons">
					{mediaLinks.map(createMediaLink)}
				</div>

				<div className="contactForm"></div>
			</div>
		</div>
	);
}

export default MainContact;
