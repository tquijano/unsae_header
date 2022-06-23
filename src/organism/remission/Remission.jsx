import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searcher from "../../molecules/searcher/Searcher";
import Saludo from "../../assets/img/ola.gif";

import "./Remission.scss";
import CreateRemission from "../../molecules/createRemission/CreateRemission";
import {
  getRemissions,
  getRemissionsTeacher,
  getStudentsTeacher,
} from "../../actions/remissions";
import Card_remission from "../../molecules/cards_remissions/Card_remission";
import Checkbox from "../../atoms/checkbox/Checkbox";

const Remission = ({ type }) => {
  const dispatch = useDispatch();
  const { user, id } = useSelector((state) => state.auth);
  const [dataRemissions, setDataRemissions] = useState([]);
  const [dataRemissionsTeacher, setDataRemissionsTeacher] = useState([]);

  useEffect(() => {
    type === "Docentes"
      ? dispatch(getRemissionsTeacher(id, setDataRemissions)) &&
        dispatch(getStudentsTeacher(id, setDataRemissionsTeacher))
      : dispatch(getRemissions(setDataRemissions));
  }, [dispatch, setDataRemissions]);
  console.log("data observaciones", dataRemissions);
  const [searcher, setSearcher] = useState("");
  const [cardSelected, setCardSelected] = useState(0);
  const cards = [
    { title: "Mis estudiantes", color: "#F7EEE1" },
    { title: "Ver remisiones", color: "#E1E2F7" },
  ];

  const Estudiantes = [
    "Nombre Estudiante",
    "Documento",
    "plan",
    "Crear Remision",
  ];
  const Docentes = [
    "Nombre Estudiante",
    "Documento",
    "plan",
    "Tipo Remision",
    "Fecha",
    "Atendida",
  ];

  const Bienestar = [
    "Nombre Docente",
    "Doc. Docente",
    "Nombre Estudiante",
    "Doc. Estudiante",
    "Plan Estudiante",
    "Remision",
    "Fecha",
    "Atendida",
  ];
  return (
    <div className='remission'>
      <div className='remission_header'>
        <div className='remission_header--title'>
          <h1>Bienvenido {user} </h1>
          <img className='remission_img' src={Saludo} />
        </div>
        <Searcher setSearcher={setSearcher} />
      </div>
      {type === "Docentes" ? (
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
      ) : (
        <></>
      )}
      <table>
        <thead>
          <tr>
            {type === "Docentes"
              ? cardSelected === 0
                ? Estudiantes.map((title, index) => (
                    <th className='remission-th--estudiantes' key={index}>
                      {title}
                    </th>
                  ))
                : Docentes.map((title, index) => (
                    <th className='remission-th--docentes' key={index}>
                      {title}
                    </th>
                  ))
              : Bienestar.map((title, index) => (
                  <th className='remission-th--bienestar' key={index}>
                    {title}
                  </th>
                ))}
          </tr>
        </thead>
        {type === "Docentes" ? (
          cardSelected === 0 ? (
            <>
              {dataRemissionsTeacher[0] && (
                <tbody>
                  {dataRemissionsTeacher[0]
                    .filter((std) =>
                      std.documento_estudiante.toString().includes(searcher)
                    )
                    .map((student, index) => (
                      <tr key={index}>
                        <>
                          <td>{student.nombres + " " + student.apellidos}</td>
                          <td>{student.documento_estudiante}</td>
                          <td>{student.codigo_plan}</td>
                          <td>
                            <CreateRemission data={student} />
                          </td>
                        </>
                      </tr>
                    ))}
                </tbody>
              )}
            </>
          ) : (
            <>
              {console.log(
                "data remisiones la que necesito",
                dataRemissions[0]
              )}

              {dataRemissions[0] && (
                <tbody>
                  {dataRemissions[0]
                    .filter((std) =>
                      std.documento_estudiante.toString().includes(searcher)
                    )
                    .map((student, index) => (
                      <tr key={index}>
                        <>
                          <td>{student.nombres + " " + student.apellidos}</td>
                          <td>{student.documento_estudiante}</td>
                          <td>{student.codigo_plan}</td>
                          <td>{student.nombre_remision}</td>
                          <td>
                            {new Date(student.fecha).toLocaleDateString()}
                          </td>
                          <td>{student.atendida ? "SI" : "NO"}</td>
                        </>
                      </tr>
                    ))}
                </tbody>
              )}
            </>
          )
        ) : (
          <>
            {dataRemissions[0] && (
              <tbody>
                {dataRemissions[0]
                  .filter((std) =>
                    std.documento_estudiante.toString().includes(searcher)
                  )
                  .map((student, index) => (
                    <tr key={index}>
                      <>
                        <td>{student.nombre_apellido_docente}</td>
                        <td>{student.documento_docente}</td>
                        <td>{student.nombre_apellido_estudiante}</td>
                        <td>{student.documento_estudiante}</td>
                        <td>{student.nombre_plan}</td>
                        <td>{student.tipo_remision}</td>
                        <td>{new Date(student.fecha).toLocaleDateString()}</td>
                        <td>
                          <Checkbox
                            state={student.atendida}
                            codigo={student.codigo_remision}
                            id={index}
                          />
                        </td>
                      </>
                    </tr>
                  ))}
              </tbody>
            )}
          </>
        )}
        {/* {dataRemissions[0] && (
          <tbody>
            {dataRemissions[0]
              .filter((std) =>
                std.documento_estudiante.toString().includes(searcher)
              )
              .map((student, index) => (
                <tr key={index}>
                  {type === "Docentes" ? (
                    cardSelected === 0 ? (
                      <>
                        <td>{student.nombres + " " + student.apellidos}</td>
                        <td>{student.documento_estudiante}</td>
                        <td>{student.codigo_plan}</td>
                        <td>
                          <CreateRemission data={student} />
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{student.nombres + " " + student.apellidos}</td>
                        <td>{student.documento_estudiante}</td>
                        <td>{student.codigo_plan}</td>
                        <td>{student.tipo_observacion}</td>
                        <td>{student.fecha}</td>
                      </>
                    )
                  ) : (
                    <>
                      <td>
                        {student.nombres_docente +
                          " " +
                          student.apellidos_docente}
                      </td>
                      <td>{student.documento_docente}</td>
                      <td>{student.nombres + " " + student.apellidos}</td>
                      <td>{student.documento_estudiante}</td>
                      <td>{student.codigo_plan}</td>
                      <td>{student.tipo_observacion}</td>
                      <td>{student.fecha}</td>
                    </>
                  )}
                </tr>
              ))}
          </tbody>
        )} */}
      </table>
    </div>
  );
};

export default Remission;
