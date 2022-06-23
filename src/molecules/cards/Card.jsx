import React from "react";
import ButtonCard from "../../atoms/buttons/buttonCard/ButtonCard";
import "./Card.scss";

const Card = ({ type, message, link }) => {
  return (
    <div className='card'>
      <div className='card_side card_side--front'>
        <div className={`card_img card_img--${type}`}></div>
        <div className='card_heading'>{message}</div>
      </div>
      <div className='card_side card_side--back'>
        <br />
        <br />
        <br />
        <ButtonCard text='Ver Más' url={link} />
      </div>
    </div>
  );
};

export default Card;
