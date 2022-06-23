import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { createObservation } from "../../actions/observations";
import "./CreateInformation.scss";

const CreateInformation = ({ data }) => {
  const { user, id } = useSelector((state) => state.auth);
  //En textInfo esta lo que se creo
  const dispatch = useDispatch();
  console.log("data create", data);
  const [textInfo, setTextInfo] = useState("");
  const handleCreate = async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Crear Observación",
      inputPlaceholder: "Escriba su observación aqui...",
      inputAttributes: {
        "aria-label": "Escriba su observación aqui",
      },
      showCancelButton: true,
    });

    if (text) {
      console.log("data", data);
      setTextInfo(text);
      dispatch(
        createObservation(
          data.documento_estudiante,
          data.documento_docente ? data.documento_docente : id,
          data.codigo_plan,
          text
        )
      );
    }
  };
  return (
    <button className='createInformation_button' onClick={handleCreate}>
      Crear Observacion
    </button>
  );
};

export default CreateInformation;
