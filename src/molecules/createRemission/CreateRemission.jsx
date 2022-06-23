import "./CreateRemission.scss";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { createRemission, getTypesRemission } from "../../actions/remissions";

const CreateRemission = ({ data }) => {
  const { id } = useSelector((state) => state.auth);
  const [typesRemission, setTypesRemission] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypesRemission(setTypesRemission));
  }, [dispatch, setTypesRemission]);
  const handleCreate = async () => {
    const { value: code } = await Swal.fire({
      title: "Crear Remision",
      text: "Como primer paso seleccione el tipo de remision que desee",
      input: "select",
      inputOptions: typesRemission,
      inputPlaceholder: "Tipo de remision",
      showCancelButton: true,
    });

    if (code) {
      const { value: text } = await Swal.fire({
        input: "textarea",
        inputLabel: "Ahora por favor escriba el motivo de su remision",
        inputPlaceholder: "Escriba el motivo de su remision aqui...",
        inputAttributes: {
          "aria-label": "Escriba su observación aqui",
        },
        showCancelButton: true,
      });

      if (text) {
        console.log("data", data);
        dispatch(
          createRemission(
            data.documento_docente ? data.documento_docente : id,
            data.documento_estudiante,
            data.codigo_plan,
            text,
            code
          )
        );
      }
    }
  };
  return (
    <button className='createRemission_button' onClick={handleCreate}>
      Crear Remisión
    </button>
  );
};

export default CreateRemission;
