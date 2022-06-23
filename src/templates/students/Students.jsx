import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchTeacher } from "../../actions/tutors";
import ButtonLogout from "../../atoms/buttons/buttonLogout/ButtonLogout";
import Navbar from "../../molecules/navbar/Navbar";
import Tutorial from "../../organism/turorials/Tutorial";
import TutorshipStudent from "../../molecules/tutoshipStudent/TutorshipStudent";
import "./Students.scss";

const Students = () => {
  const dispatch = useDispatch();

  const [dataTeacher, setDataTeacher] = useState([]);
  const [tabSelected, setTabSelected] = useState("0");

  const tabs = [
    {
      label: "Tutoria",
      name: "menuStudent",
      value: "0",
    },
    {
      label: "Observaciones",
      name: "menuStudent",
      value: "1",
    },
  ];
  const Student = ["Nombre Docente", "Fecha", "Estado Tutoria"];

  const { user, id } = useSelector((state) => state.auth);
  console.log(user);
  useEffect(() => {
    dispatch(searchTeacher(id, setDataTeacher));
  }, [dispatch, id, setDataTeacher]);

  return (
    <>
      <div className='student'>
        <div className='student_navbar'>
          <Navbar setTabSelected={setTabSelected} tabs={tabs} />
        </div>
        <div className='student_container'>
          {tabSelected === "0" && (
            <>
              <div className='student_container--history'>
                <Tutorial id={id} user={user} data={Student} />
              </div>
              <div className='student_container--request'>
                <h1>Solicitar Tutoría</h1>
                {dataTeacher[0] &&
                  dataTeacher[0].map((teacher) => (
                    <p key={teacher.documento_docente}>
                      {teacher.nombres} es tu asignado para el plan:{" "}
                      {teacher.codigo_plan}
                      {console.log("data profeee", dataTeacher[0])}
                    </p>
                  ))}
                <TutorshipStudent />
                <ButtonLogout />
              </div>
            </>
          )}
          {tabSelected === "1" && <>Pagina en mantenimiento</>}
        </div>
      </div>
    </>
  );
};

export default Students;
