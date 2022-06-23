import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Searcher from "../../molecules/searcher/Searcher";
import CreateInformation from "../../molecules/createInformation/CreateInformation";
import "./Observation.scss";
import ViewInformation from "../../molecules/viewInformation/ViewInformation";
import Saludo from "../../assets/img/ola.gif";
import {
  getObservationDocente,
  getObservations,
} from "../../actions/observations";

const Observation = ({ type }) => {
  const Docentes = [
    "Nombre Estudiante",
    "Documento",
    "plan",
    "Ver Observaciones",
    "Crear Observaciones",
  ];
  const Bienestar = [
    "Nombre Docente",
    "Documento Docente",
    "Nombre Estudiante",
    "Documento Estudiante",
    "plan Estudiante",
    "Ver Observaciones",
  ];
  const dispatch = useDispatch();
  const [dataObservations, setDataObservations] = useState([]);
  const { user, id } = useSelector((state) => state.auth);

  useEffect(() => {
    type === "Docentes"
      ? dispatch(getObservationDocente(id, setDataObservations))
      : dispatch(getObservations(setDataObservations));
  }, [dispatch, setDataObservations]);
  console.log("data observaciones", dataObservations);
  const [searcher, setSearcher] = useState("");

  return (
    <div className='observation'>
      <div className='observation_header'>
        <div className='observation_header--title'>
          <h1>Bienvenido {user} </h1>
          <img className='observation_img' src={Saludo} />
        </div>
        <Searcher setSearcher={setSearcher} />
      </div>
      <table>
        <thead>
          <tr>
            {type === "Docentes"
              ? Docentes.map((title, index) => (
                  <th className='observation-th--docentes' key={index}>
                    {title}
                  </th>
                ))
              : Bienestar.map((title, index) => (
                  <th className='observation-th--bienestar' key={index}>
                    {title}
                  </th>
                ))}
            {/* <th>Nombre Estudiante</th>
            <th>Documento</th>
            <th>Plan</th>
            <th>Ver observaciones</th>
            <th>Crear observaciones</th> */}
          </tr>
        </thead>
        {dataObservations[0] && (
          <tbody>
            {dataObservations[0]
              .filter((std) =>
                std.documento_estudiante.toString().includes(searcher)
              )
              .map((student, index) => (
                <tr key={index}>
                  {type === "Docentes" ? (
                    <>
                      <td>{student.nombres + " " + student.apellidos}</td>
                      <td>{student.documento_estudiante}</td>
                      <td>{student.codigo_plan}</td>
                      <td>
                        <ViewInformation observacion={student.observaciones} />
                      </td>
                      <td>
                        <CreateInformation data={student} />
                      </td>
                    </>
                  ) : (
                    <>
                      <td>
                        {student.nombre_docente +
                          " " +
                          student.apellidos_docente}
                      </td>
                      <td>{student.documento_docente}</td>
                      <td>{student.nombres + " " + student.apellidos}</td>
                      <td>{student.documento_estudiante}</td>
                      <td>{student.codigo_plan}</td>
                      <td>
                        <ViewInformation observacion={student.observaciones} />
                      </td>
                    </>
                  )}
                </tr>
              ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Observation;
