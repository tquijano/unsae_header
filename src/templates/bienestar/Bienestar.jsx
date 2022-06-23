import React, { useState } from "react";
import Tutor from "../../molecules/tutor/Tutor";
import RegisterBienestar from "../../organism/register/registerBienestar/RegisterBienestar";
import RegisterStudent from "../../organism/register/registerStudent/RegisterStudent";
import RegisterTeacher from "../../organism/register/registerTeacher/RegisterTeacher";
import "./Bienestar.scss";
import Remission from "../../organism/remission/Remission";
import Observation from "../../organism/observation/Observation";
import Navbar from "../../molecules/navbar/Navbar";
import ButtonLogout from "../../atoms/buttons/buttonLogout/ButtonLogout";
import Tutorial from "../../organism/turorials/Tutorial";

const Bienestar = () => {
  const [tabSelected, setTabSelected] = useState("0");

  const tabs = [
    {
      label: "Observaciones",
      name: "menu",
      value: "0",
    },
    {
      label: "Remisiones",
      name: "menu",
      value: "1",
    },
    {
      label: "Tutoria",
      name: "menu",
      value: "2",
    },
    {
      label: "Registro",
      name: "menu",
      value: "3",
    },
  ];

  const Bienestar = [
    "Nombre Docente",
    "Doc. Docente",
    "Nombre Estudiante",
    "Doc. Estudiante",
    "Fecha",
    "Estado Tutoria",
  ];
  return (
    <div className='bienestar'>
      <div className='bienestar_navbar'>
        <Navbar setTabSelected={setTabSelected} tabs={tabs} />
      </div>
      <>
        {tabSelected === "0" && (
          <div className='bienestar_container'>
            <Observation />
            <ButtonLogout />
          </div>
        )}
        {tabSelected === "1" && (
          <div className='bienestar_container'>
            <Remission />
            <ButtonLogout />
          </div>
        )}
        {tabSelected === "2" && (
          <div className='bienestar_containerTutor'>
            <div className='bienestar_containerTutor--history'>
              <Tutorial data={Bienestar} />
            </div>
            <div className='bienestar_containerTutor--request'>
              <h1> Asignar tutor </h1>
              <Tutor />
              <ButtonLogout />
            </div>
          </div>
        )}
        {tabSelected === "3" && (
          <div className='bienestar_container'>
            <RegisterStudent />
            <RegisterTeacher />
            <RegisterBienestar />
            <ButtonLogout />
          </div>
        )}
      </>
    </div>
  );
};

export default Bienestar;
