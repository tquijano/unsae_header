import React from "react";
import Actual from "../../assets/img/actual.png";
import History from "../../assets/img/history.png";
import "./Cards_tutor.scss";

const Cards_tutor = ({ setCardSelected, value, title, color }) => {
  const handleClick = (e) => {
    console.log("Card oprimida", value);
    setCardSelected(value);
  };
  return (
    <div onClick={handleClick} className='cardTutor'>
      <h1 style={{ color: color }}>{title}</h1>
      <img className='cardTutor_img' src={value === 0 ? Actual : History} />
    </div>
  );
};

export default Cards_tutor;
