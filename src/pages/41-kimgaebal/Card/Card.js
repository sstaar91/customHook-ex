import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="cardContainer">
      <img
        src="/images/41-kimgaebal/quokka.jpg"
        alt="quokka"
        className="cardImage"
      />
      <span className="name">쿼카 (Frontend Developer)</span>
      <span className="text">특징 : 귀여움, 만지면 벌금</span>
      <span className="text">스택 : React.js, next.js</span>
    </div>
  );
};

export default Card;
