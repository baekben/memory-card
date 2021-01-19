import React from 'react';

export default function Headers(props) {
	const { page, switchPage } = props;

	return (
		<div>
			<h1>Memory Card Game</h1>

			<h2>Menu: {page}</h2>
			<div>
				<u id="home" onClick={(e) => switchPage(e.target.id)}>
					Home
				</u>
			</div>
			<div>
				<u id="about" onClick={(e) => switchPage(e.target.id)}>
					About
				</u>
			</div>
		</div>
	);
}
