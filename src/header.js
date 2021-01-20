import React from 'react';

export default function Headers(props) {
	const { page, switchPage } = props;

	return (
		<header className=" App-header" id={page}>
			<h1>Memory Card Game</h1>

			<div className="row justify-content-md-center" id="menu">
				<button className="btn col-sm-2" id="home" onClick={(e) => switchPage(e.target.id)}>
					Home
				</button>
				<button className="btn col-sm-2" id="about" onClick={(e) => switchPage(e.target.id)}>
					About
				</button>
			</div>
			<div id="col menu"></div>
		</header>
	);
}
