import React from 'react';
import MainContact from './contact-components/MainContact';
import Footer from './contact-components/Footer';

function Contact() {
	return (
		<div className="section" id="contact">
			<div className="infoSection">
				<p className="prompt">
					Do you enjoy what you hear and want your own beat?
					<br />
					Contact me so we can work together
				</p>

				<MainContact />
				<p className="conclusion">
					Remember, music is food for the soul
				</p>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
