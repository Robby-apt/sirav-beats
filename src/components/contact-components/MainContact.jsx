import React from 'react';
import MediaLink from './MediaLink';
import mediaLinks from '../../socialMedia';
import ContactForm from './ContactForm';

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
				<div className="socialIcons contactSubSection">
					<div className="socialMediaDisplay">
						{mediaLinks.map(createMediaLink)}
					</div>
				</div>

				<div className="contactFormArea contactSubSection">
					<ContactForm />
				</div>
			</div>
		</div>
	);
}

export default MainContact;
