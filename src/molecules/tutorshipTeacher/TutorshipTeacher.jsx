import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useDispatch, useSelector } from "react-redux";
import { getStudentTutorship, tutorshipAssignment } from "../../actions/tutors";
import es from "date-fns/locale/es";
import "./TutorshipTeacher.scss";
import ButtonTutorship from "../../atoms/buttons/buttonTutorship/ButtonTutorship";

const Tutorship = () => {
  const dispatch = useDispatch();
  const [dataStudentTutorship, setDataStudentTutorship] = useState([]);
  const { id } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getStudentTutorship(id, setDataStudentTutorship));
  }, [dispatch, setDataStudentTutorship]);

  const [studentValue, setStudentValue] = useState("");

  const handleSelectStudentChange = (e) => {
    setStudentValue(e.target.value);
  };

  const [dateSelected, setDateSelect] = useState("");

  const [tutorshipAssignmentDone, setTutorshipAssignmentDone] = useState([]);

  const handleAssignment = (e) => {
    e.preventDefault();
    dispatch(
      tutorshipAssignment(
        id,
        studentValue,
        dateSelected.toISOString().split("T")[0],
        "docente"
      )
    );
    setTutorshipAssignmentDone(
      `Tutoría asignada el dia ${
        dateSelected.toISOString().split("T")[0]
      } al estudiante ${studentValue}`
    );
    // console.log(`Tutoria: profe: ${id} estudiante: ${studentValue} fecha:${ `${dateSelected.getFullYear()}-${dateSelected.getMonth() + 1}-${dateSelected.getDate()}`}`);
    console.log("-------------envie");
  };

  const footer = dateSelected ? (
    <p>{format(dateSelected, "PPP", { locale: es })}</p>
  ) : (
    <p>Selecciona una fecha</p>
  );

  return (
    <div className='tutorship'>
      {dataStudentTutorship[0] ? (
        <>
          <select
            name='select'
            value={studentValue}
            onChange={handleSelectStudentChange}
            required
          >
            <option>Selecciona un Estudiante</option>
            {dataStudentTutorship[0].map((student) => (
              <option
                value={student.documento_estudiante}
                key={student.documento_estudiante}
              >
                {student.apellidos} {student.nombres}{" "}
                {student.documento_estudiante}
              </option>
            ))}
          </select>
          <DayPicker
            mode='single'
            selected={dateSelected}
            onSelect={setDateSelect}
            footer={footer}
            required
          />
          {tutorshipAssignmentDone.length === 0 ? (
            <></>
          ) : (
            <p>{tutorshipAssignmentDone}</p>
          )}
          <ButtonTutorship action={handleAssignment} />
          {/* <button className="buttonTutorship" type="submit" onClick={handleAssignment}>
            <span className="text">Asignar Tutoría</span>
            <i className="icon">✓</i>
          </button> */}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Tutorship;
