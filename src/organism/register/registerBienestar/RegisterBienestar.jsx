import React from "react";
import { useDispatch } from "react-redux";
import { startBienestarRegister } from "../../../actions/auth";
import { useForm } from "../../../hooks/useForm";
import "./RegisterBienestar.scss";

const RegisterBienestar = () => {
  const dispatch = useDispatch();

  const initialForm = {
    documento: "123123",
    nombres: "heroku profe",
    apellidos: "node",
    usuario_un: "profeh",
    estado: "1",
    sexo: "1",
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { documento, nombres, apellidos, usuario_un, estado, sexo } =
    formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(
      startBienestarRegister(
        documento,
        nombres,
        apellidos,
        usuario_un,
        estado,
        sexo
      )
    );
  };

  return (
    <div className='registerBienestar-container'>
      <h1>Registrar un nuevo usuario de Bienestar</h1>
      <form
        className='registerBienestar-container__form'
        onSubmit={handleRegister}
      >
        <div className='form_group'>
          <label htmlFor='documento' className='form_label'>
            Documento
          </label>
          <input
            id='documento'
            type='text'
            className='form_input'
            placeholder=''
            name='documento'
            value={documento}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form_group'>
          <label htmlFor='nombres' className='form_label'>
            Nombres
          </label>
          <input
            id='nombres'
            type='text'
            className='form_input'
            placeholder=''
            name='nombres'
            value={nombres}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form_group'>
          <label htmlFor='apellidos' className='form_label'>
            Apellidos
          </label>
          <input
            id='apellidos'
            type='text'
            className='form_input'
            placeholder=''
            name='apellidos'
            value={apellidos}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form_group'>
          <label htmlFor='usuario_un' className='form_label'>
            Usuario UN
          </label>
          <input
            id='usuario_un'
            type='text'
            className='form_input'
            placeholder=''
            name='usuario_un'
            value={usuario_un}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form_group'>
          <label htmlFor='estado' className='form_label'>
            Estado
          </label>
          <input
            id='estado'
            type='text'
            className='form_input'
            placeholder=''
            name='estado'
            value={estado}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form_group'>
          <label htmlFor='sexo' className='form_label'>
            Sexo
          </label>
          <input
            id='sexo'
            type='text'
            className='form_input'
            placeholder=''
            name='sexo'
            value={sexo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form_group'>
          <input type='submit' className='form_button' value='Registrar' />
        </div>
      </form>
    </div>
  );
};

export default RegisterBienestar;
