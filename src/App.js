import React, { useState } from 'react';
import Header from './header';
import Gameboard from './gameboard';
import cards from './cards.json';
function App() {
	const [page, setPage] = useState('Home Page');
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	const countScore = () => {
		setScore(score + 1);
	};

	const newHigh = () => {
		if (score > highScore) {
			setHighScore(score);
		}
		setScore(0);
	};
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

	const resetBoard = () => {
		cards.forEach((e) => {
			e.clicked = false;
		});
		setScore(0);
	};

	const gamemaster = (e) => {
		console.log(e);
		if (!cards[e - 1].clicked) {
			cards[e - 1].clicked = true;
			console.log(cards);
			countScore();
		} else {
			console.log('lose');
			newHigh();
			resetBoard();
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<Header switchPage={switchPage} page={page} />
			</header>
			<div className="container">
				<h2>Container</h2>
				<div className="d-block" id="homePage">
					<div>
						<div>
							Score:<span>{score}</span>
						</div>
						<div>
							High Score: <span>{highScore}</span>
						</div>
					</div>

					<div>
						<Gameboard gamemaster={gamemaster} score={score} highScore={highScore} />
					</div>
				</div>
				<div className="d-none" id="aboutPage">
					<div>Text for about</div>
				</div>
			</div>
		</div>
	);
}

export default App;
