import React, { useState } from 'react';
import Scoreboard from './scoreboard';
import Gameboard from './gameboard';
// import cards from './cards.json';
function App() {
	const [page, setPage] = useState('Home Page');

	const switchPage = (e) => {
		const homeId = document.getElementById('homePage');
		const aboutId = document.getElementById('aboutPage');
		if (e === 'home') {
			setPage('Home Page');
			homeId.className = 'd-block ';
			aboutId.className = 'd-none ';
		} else {
			setPage('About Page');
			homeId.className = 'd-none';
			aboutId.className = 'd-block ';
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Memory Card Game</h1>
			</header>
			<div className="container">
				<h2>Container</h2>
				<div>
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
				<div>
					<div className="d-block" id="homePage">
						<div>
							<Scoreboard />
						</div>
						<div>
							<Gameboard />
						</div>
					</div>
					<div className="d-none" id="aboutPage">
						<div>Text for about</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
