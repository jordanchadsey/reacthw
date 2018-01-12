import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
	<div className="card">
		<div className="img-container">
			<img className="ultraBeasts" alt={props.name} src={props.image} picked={props.picked} onClick={() => props.cardPicked(props.id)} />
		</div>
	</div>
);

export default CharacterCard;