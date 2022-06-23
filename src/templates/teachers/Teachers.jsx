import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchStudent } from "../../actions/tutors";
import ButtonLogout from "../../atoms/buttons/buttonLogout/ButtonLogout";
import Navbar from "../../molecules/navbar/Navbar";
import Tutorship from "../../molecules/tutorshipTeacher/TutorshipTeacher";
import Observation from "../../organism/observation/Observation";
import Remission from "../../organism/remission/Remission";
import Tutorial from "../../organism/turorials/Tutorial";
import "./Teachers.scss";

const Teacher = () => {
  const dispatch = useDispatch();

  const [dataStudent, setDataStudent] = useState([]);

  const { user, id } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(searchStudent(id, setDataStudent));
  }, [dispatch, id, setDataStudent]);

  const [tabSelected, setTabSelected] = useState("0");

  const tabs = [
    {
      label: "Remisiones",
      name: "menuTeacher",
      value: "0",
    },
    {
      label: "Observaciones",
      name: "menuTeacher",
      value: "1",
    },
    {
      label: " Mis Tutorias",
      name: "menuTeacher",
      value: "2",
    },
    {
      label: "Registro",
      name: "menuTeacher",
      value: "3",
    },
  ];

  const Teacher = [
    "Nombre Estudiante",
    "Doc. Estudiante",
    "Fecha",
    "Estado de la Tutoría",
  ];

  return (
    <div className='docentes'>
      <div className='docentes_navbar'>
        <Navbar setTabSelected={setTabSelected} tabs={tabs} />
      </div>
      {dataStudent[0] && (
        <>
          {tabSelected === "0" && (
            <div className='docentes_container'>
              <Remission type='Docentes' data={dataStudent[0]} />
              <ButtonLogout />
            </div>
          )}
          {tabSelected === "1" && (
            <div className='docentes_container'>
              <Observation type='Docentes' />
              <ButtonLogout />
            </div>
          )}
          {tabSelected === "2" && (
            <>
              <div className='docentes_containerTutor'>
                <div className='docentes_containerTutor--history'>
                  <Tutorial id={id} user={user} data={Teacher} />
                </div>
                <div className='docentes_containerTutor--request'>
                  <h1> Asignar tutoría</h1>
                  <Tutorship />
                  <ButtonLogout />
                </div>
              </div>
            </>
          )}
          {tabSelected === "3" && (
            <div className='docentes_container'>
              {dataStudent[0].map((student) => (
                <p key={student.documento_estudiante}>
                  Nombre Estudiante: {student.nombres} Documento Estudiante:{" "}
                  {student.documento_estudiante} Plan: {student.codigo_plan}{" "}
                </p>
              ))}
              <ButtonLogout />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Teacher;
