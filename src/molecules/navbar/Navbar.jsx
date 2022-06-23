import React from "react";

import "./Navbar.scss";

const Navbar = ({ setTabSelected, tabs }) => {
  const handleChange = (e) => {
    console.log("tab", e.target.value);
    console.log(typeof e.target.value);
    setTabSelected(e.target.value);
  };

  return (
    <nav className='menu_navbar'>
      {tabs.map(({ label, name, value }) => (
        <input
          label={label}
          type='radio'
          name={name}
          value={value}
          className='tabMenu'
          onChange={handleChange}
          defaultChecked={value === "0" ? true : false}
          key={value}
        />
      ))}
    </nav>
  );
};

export default Navbar;
