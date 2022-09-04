import React from "react";

const CardItem = (props) => {
  return (
    <div className="card">
      <div className="card__content">
        <img className="card__img" src={props.card.image} alt="" />
        <span className="card__name">{props.card.name}</span>
        <span className="card__text">
          Species:  {props.card.species}
        </span>
        <span className="card__text">Gender: {props.card.gender}</span>
        <span className="card__text">Location: {props.card.location.name}</span>
      </div>
    </div>
  );
};

export default CardItem;