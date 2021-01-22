import React from 'react';

export default function Headers(props) {
	const { page, switchPage } = props;

	return (
		<header className="justify-content-center App-header" id={page}>
			<h1>Memory Card Game</h1>

			<div className="row justify-content-md-center" id="menu">
				<button
					className="btn btn-secondary col-sm-3 active"
					id="home"
					onClick={(e) => switchPage(e.target.id)}>
					Home
				</button>
				<div className="divider" />
				<button
					className="btn btn-secondary col-sm-3"
					id="about"
					onClick={(e) => switchPage(e.target.id)}>
					About
				</button>
			</div>
			<div id="col menu"></div>
		</header>
	);
}
