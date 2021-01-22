import React from 'react';

export default function About() {
	return (
		<div className="d-none" id="aboutPage">
			<div>
				<h3>About</h3>
				<p>- Developed by Ben Baek while learning about web development</p>
			</div>
			<div>
				<h3>How To Play</h3>
				<p>
					- This application puts your memory to the test. You are presented with multiple images of
					celebrities. The images get shuffled every-time they are clicked. You CAN NOT click on any
					image more than once or else your score resets to zero. The main objective is to get the
					highest score as possible.
				</p>
			</div>
		</div>
	);
}
