import React, { useState } from "react";
import "./Searcher.scss";
import Icon from "../../assets/img/search.png";

const Searcher = ({ setSearcher }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSearcher(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='searcher_form' onSubmit={handleSubmit}>
      <input
        className='searcher_input'
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Buscar documento estudiante'
      />
      <img className='searcher_img' src={Icon} />
    </form>
  );
};

export default Searcher;
