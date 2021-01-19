import React from 'react';

export default function Card(props) {
	const { id, name, gamemaster } = props;
	return (
		<div className="col-md-4 card">
			<div className="cardItem">
				<h3>
					<b id={id} onClick={(e) => gamemaster(e.target.id)}>
						{name}
					</b>
				</h3>
			</div>
			<div className="cardInfo">{name} info</div>
		</div>
	);
}
