import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { tutoringProvided } from "../../../actions/pendingTutor";
import "./ButtonState.scss";

const ButtonState = ({ id, doc, date }) => {
  const dispatch = useDispatch();

  const handleProvided = () => {
    Swal.fire({
      title:
        "¿Esta seguro que desea cambiar el estado de la tutoria a realizada?",
      text: "NO podra revertir esta acción!!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#005068",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, ya la realice!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(tutoringProvided(2, id, doc, date));
      }
    });
  };
  return (
    <button className='buttonState' onClick={handleProvided}>
      <span className="text">Realizada</span>
      <i className="icon">✓</i>
    </button>
  );
};

export default ButtonState;
