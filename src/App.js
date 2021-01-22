import React, { useState } from 'react';
import Header from './header';
import Gameboard from './gameboard';
import Data from './data';
import About from './about';
import './App.css';
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
		Data.cards.forEach((e) => {
			e.clicked = false;
		});
		setScore(0);
	};

	const gamemaster = (e) => {
		console.log('e: ' + e);
		if (!Data.cards[e - 1].clicked) {
			for (let i = 0; i < Data.cards.length; i++) {
				Data.cards[i].clicked = false;
			}
			Data.cards[e - 1].clicked = true;
			countScore();
		} else {
			console.log('lose');
			newHigh();
			resetBoard();
		}
	};

	return (
		<div className=" App">
			<Header switchPage={switchPage} page={page} />

			<div className="container">
				<div className="d-block" id="homePage">
					<div id="scoreboard" className=" user-select-none text-center">
						<p>Score:{score}</p>
						<p>High Score: {highScore}</p>
					</div>

					<div>
						<Gameboard gamemaster={gamemaster} score={score} highScore={highScore} />
					</div>
				</div>
				<About />
			</div>
		</div>
	);
}

export default App;
