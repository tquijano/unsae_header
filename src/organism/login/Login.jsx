import React from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();

  const initialForm = {
    username: "Admin", //profeh
    password: "12345",
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { username, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(formValues);

    dispatch(startLogin(username, password));
  };

  return (
    <div className='login'>
      <h1 className='login_title'> Inicio de sesión </h1>
      <p className='login_text'>
        QInicie sesión con su nombre de usuario y la contraseña del correo
        institucional.
      </p>
      <form className='form' onSubmit={handleLogin}>
        <div className='form_group'>
          <label htmlFor='user' className='form_label'>
            {" "}
            Usuario{" "}
          </label>
          <input
            id='user'
            type='text'
            className='form_input'
            placeholder='Usuario'
            name='username'
            value={username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form_group'>
          <label htmlFor='password' className='form_label'>
            {" "}
            Contraseña{" "}
          </label>
          <input
            id='password'
            type='password'
            className='form_input'
            placeholder='Ingrese su contraseña'
            name='password'
            value={password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form_group'>
          <input type='submit' className='form_button' value='Ingresar' />
        </div>
      </form>
    </div>
  );
};

export default Login;
