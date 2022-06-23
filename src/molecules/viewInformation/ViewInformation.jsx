import React from "react";
import Swal from "sweetalert2";
import "./ViewInformation.scss";

const ViewInformation = ({ observacion }) => {
  console.log(observacion);
  const handleView = () => {
    Swal.fire({
      title: "Observaciones",
      html: `<ol>${observacion
        .map(
          (obs, index) =>
            `<li style="display: flex ;text-align: start;">
      ${
        index +
        ". &nbsp; &nbsp; " +
        new Date(obs[2]).toLocaleDateString() +
        " &nbsp; &nbsp; " +
        `<p style="max-width: 70%;">
        ${obs[1]} </p>`
      }</li>`
        )
        .join("&nbsp;")}</ol>`,
      confirmButtonColor: "#005068",
    });
  };
  return (
    <button className='viewInformation_button' onClick={handleView}>
      Ver Informacion
    </button>
  );
};

export default ViewInformation;
