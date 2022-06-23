import React from "react";
import { useDispatch } from "react-redux";
import { updateRemission } from "../../actions/remissions";
import "./Checkbox.scss";

const Checkbox = ({ state, id, codigo }) => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    console.log("cambie el estado a ", e.target.checked);
    dispatch(updateRemission(codigo, e.target.checked));
  };

  return (
    <div className='checkbox_attended'>
      <input
        type='checkbox'
        id={id}
        onChange={handleChange}
        defaultChecked={state}
      />
      <label htmlFor={id} />
    </div>
  );
};

export default Checkbox;
