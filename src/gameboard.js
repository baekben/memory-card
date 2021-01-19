import React, { useEffect, useState } from 'react';
import Card from './card';
import cards from './cards.json';

export default function Gameboard(props) {
	const { score, gamemaster, highScore } = props;
	const [board, setBoard] = useState([]);

	useEffect(() => {
		const randCards = () => {
			let boardValid = false;
			let cardAmount = cards.length;
			let currentBoard = [];
			for (let i = 0; i < 3; i++) {
				var randNum = Math.floor(Math.random() * cardAmount);
				while (currentBoard.includes(cards[randNum])) {
					randNum = Math.floor(Math.random() * cardAmount);
				}
				if (cards[randNum] !== currentBoard[randNum]) {
					boardValid = true;
				}
				if (!cards[randNum].clicked) {
					boardValid = true;
				}
				currentBoard = [...currentBoard, cards[randNum]];
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
					<Card id={card.id} name={card.name} key={card.id} gamemaster={gamemaster} />
				))}
			</div>
		</div>
	);
}
