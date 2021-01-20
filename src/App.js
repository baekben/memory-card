import React, { useState } from 'react';
import Header from './header';
import Gameboard from './gameboard';
import Data from './data.js';
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
		console.log(e);
		if (!Data.cards[e - 1].clicked) {
			Data.cards[e - 1].clicked = true;
			console.log(Data.cards);
			countScore();
		} else {
			console.log('lose');
			newHigh();
			resetBoard();
		}
	};

	return (
		<div className="justify-content-center App">
			<Header switchPage={switchPage} page={page} />

			<div className="container">
				<div className="d-block" id="homePage">
					<div id="scoreboard" className="row user-select-none justify-content-md-center">
						<p className="col-sm-2">Score:{score}</p>
						<p className="col-sm-2">High Score: {highScore}</p>
					</div>

					<div>
						<Gameboard gamemaster={gamemaster} score={score} highScore={highScore} />
					</div>
				</div>
				<div className="d-none" id="aboutPage">
					<div>
						<h3>About</h3>
						<p>- Developed by Ben Baek while learning about web development</p>
					</div>
					<div>
						<h3>How To Play</h3>
						<p>
							- This application puts your memory to the test. You are presented with multiple
							images of celebrities. The images get shuffled every-time they are clicked. You CAN
							NOT click on any image more than once or else your score resets to zero. The main
							objective is to get the highest score as possible.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
