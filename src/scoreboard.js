import React, { useState } from 'react';

export default function Scoreboard() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	const countScore = () => {
		setScore(score + 1);
	};

	const newHigh = () => {
		setHighScore(score);
		setScore(0);
	};

	return (
		<div>
			<div>
				Score:<span>{score}</span>
			</div>
			<div>
				High Score: <span>{highScore}</span>
			</div>
			<div>
				<button onClick={countScore}>Count</button>
				<button onClick={newHigh}>New High</button>
			</div>
		</div>
	);
}
