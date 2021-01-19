import React from 'react';

export default function Card(props) {
	const { id, name, img, gamemaster } = props;
	return (
		<div className="col-md-4 card">
			<div className="cardItem">
				<h3>
					<img src={img} alt={name} id={id} onClick={(e) => gamemaster(e.target.id)}></img>
				</h3>
			</div>
			<div className="cardInfo">{name} info</div>
		</div>
	);
}
