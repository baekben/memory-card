import React, { useEffect, useState } from 'react';
import Card from './card';
import Data from './data.js';

export default function Gameboard(props) {
	const { score, gamemaster, highScore } = props;
	const [board, setBoard] = useState([]);

	useEffect(() => {
		const randCards = () => {
			let boardValid = false;
			let cardAmount = Data.cards.length;
			let currentBoard = [];
			for (let i = 0; i < 3; i++) {
				var randNum = Math.floor(Math.random() * cardAmount);
				while (currentBoard.includes(Data.cards[randNum])) {
					randNum = Math.floor(Math.random() * cardAmount);
				}
				if (Data.cards[randNum] !== currentBoard[randNum]) {
					boardValid = true;
				}
				if (!Data.cards[randNum].clicked) {
					boardValid = true;
				}
				currentBoard = [...currentBoard, Data.cards[randNum]];
			}
			if (boardValid) {
				boardValid = false;
				return currentBoard;
			}
		};
		const newCards = randCards();
		if (newCards !== []) {
			setBoard(newCards);
		} else {
			alert('WIN!');
		}
	}, [score, highScore]);

	return (
		<div>
			Gameboard
			<div className="row" id="cards">
				{board.map((card) => (
					<Card
						id={card.id}
						name={card.name}
						key={card.id}
						img={card.img}
						gamemaster={gamemaster}
					/>
				))}
			</div>
		</div>
	);
}
