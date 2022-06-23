import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../../actions/auth";
import "./ButtonLogout.scss";
const ButtonLogout = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <button className='buttonLogout' onClick={handleLogout}>
      Cerrar Sesión
    </button>
  );
};

export default ButtonLogout;
