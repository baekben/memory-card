import React from 'react';

export default function Card(props) {
	const { id, name, img, gamemaster } = props;
	return (
		<div className="col-md-4 card border-0">
			<div className="text-center cardItem">
				<h3>
					<img src={img} alt={name} id={id} onClick={(e) => gamemaster(e.target.id)}></img>
				</h3>
				<p className="text-center" id="cardName">
					{name}
				</p>
			</div>
		</div>
	);
}
