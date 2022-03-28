import React from 'react';

function ContactForm() {
	return (
		<form action="#" method="POST" id="" className="contactForm">
			<div className="formSubsection">
				<label className="formLabel" htmlFor="name">
					Name:
				</label>
				<br />
				<input type="text" name="name" className="formInput" />
			</div>

			<div className="formSubsection">
				<label className="formLabel" htmlFor="email">
					E-mail:
				</label>
				<br />
				<input type="email" name="email" className="formInput" />
			</div>

			<div className="formSubsection">
				<label className="formLabel" htmlFor="message">
					Message:
				</label>
				<br />
				<textarea
					name="message"
					id=""
					cols="34"
					rows="5"
					className="formInput"
				/>
			</div>

			<input type="hidden" name="_gotcha" />

			<div id="statusNoti" className="sentNoti"></div>

			<button className="sendBtn" id="btnSend" type="submit">
				Send Message
			</button>
		</form>
	);
}

export default ContactForm;
