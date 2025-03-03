import React from "react";
import "./Card.css";

function Card({name , description}){
  return (
    <div className="card">
      <div className="card-title">{name}</div>
      <div className="card-description">{description}˘</div>
    </div>
  );
};

export default Card;