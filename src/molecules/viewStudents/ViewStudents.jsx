import React, { useState } from "react";
import { useSelector } from "react-redux";
import Saludo from "../../assets/img/ola.gif";
import Observation from "../../organism/ observation/Observation";
import Card_remission from "../cards_remissions/Card_remission";
import Searcher from "../searcher/Searcher";
import "./ViewStudents.scss";

const ViewStudents = () => {
  const { user } = useSelector((state) => state.auth);
  const [searcher, setSearcher] = useState("");
  const [cardSelected, setCardSelected] = useState(0);
  const cards = [
    { title: "Mis estudiantes", color: "#F7EEE1" },
    { title: "Ver remisiones", color: "#E1E2F7" },
    { title: "Crear remision", color: "#F0F7E1" },
  ];

  return (
    <>
      <div className='remission_header'>
        <div className='remission_header--title'>
          <h1>Bienvenido {user} </h1>
          <img className='remission_img' src={Saludo} />
        </div>
        <Searcher setSearcher={setSearcher} />
      </div>

      <div className='remission_cards'>
        {cards.map(({ title, color }, index) => (
          <Card_remission
            setCardSelected={setCardSelected}
            value={index}
            title={title}
            color={color}
            key={index}
          />
        ))}
      </div>

      {cardSelected === 0 && <Observation />}
      {cardSelected === 1 && <Observation />}
      {cardSelected === 2 && <Observation />}
    </>
  );
};

export default ViewStudents;
