import React from "react";
import View from "../../assets/img/doctor.png";
import Create from "../../assets/img/create-remission.png";
import Remission from "../../assets/img/medical-report.png";
import "./Card_remission.scss";

const Card_remission = ({ setCardSelected, value, title, color }) => {
  console.log("index ", value);
  console.log(typeof value);
  const handleClick = (e) => {
    console.log("Card oprimida", value);
    setCardSelected(value);
  };
  return (
    <div
      onClick={handleClick}
      className='cardRemission'
      style={{ background: color }}
    >
      <img
        className='cardRemission_img'
        src={value === 0 ? View : value === 1 ? Create : Remission}
      />
      <h1>{title}</h1>
    </div>
  );
};

export default Card_remission;
