import React from 'react';
import cards from './cards.json';

export default function Gameboard() {
	// const [board, setBoard] = useState(cards);
	let boardValid = false;
	const cardClicked = (card) => {
		console.log(card);
		const board = randCards();
		let item = document.getElementsByClassName('card');
		for (let i = 0; i < 3; i++) {
			item[i].innerHTML = board[i].name;
		}
	};

	const randCards = () => {
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
			currentBoard = [...currentBoard, cards[randNum]];
		}
		if (boardValid) {
			boardValid = false;
			console.log(currentBoard);
			return currentBoard;
		}
	};

	return (
		<div>
			Gameboard
			<div className="row" id="cards">
				<div className="col-md-4">
					<button value="1" className="card" onClick={(e) => cardClicked(e.target.value)}>
						{cards[0].name}
					</button>
				</div>
				<div className="col-md-4">
					<button value="2" className="card" onClick={(e) => cardClicked(e.target.value)}>
						{cards[1].name}
					</button>
				</div>
				<div className="col-md-4">
					<button value="3" className="card" onClick={(e) => cardClicked(e.target.value)}>
						{cards[2].name}
					</button>
				</div>
			</div>
		</div>
	);
}
