import React from "react";
import "./RegisterStudent.scss";
import { useDispatch } from "react-redux";
import { startStudentRegister } from "../../../actions/auth";
import { useForm } from "../../../hooks/useForm";

const RegisterStudent = () => {
  const dispatch = useDispatch();

  const registerStudentForm = {
    documento: "10013",
    nombres: "test_estudiante",
    apellidos: "node_estudiante",
    usuario_un: "estu_un",
    estado: "1",
    sexo: "false",
    id_tipo_usuario: "1",
    codigo: "1111",
    fecha_ingreso: "2022-4-25",
    cursando: "true",
    documento_nacional: "true",
  };

  const [formStudentValues, handleInputChange] = useForm(registerStudentForm);

  const {
    documento,
    nombres,
    apellidos,
    usuario_un,
    estado,
    sexo,
    codigo,
    fecha_ingreso,
    cursando,
    documento_nacional,
    id_tipo_usuario,
  } = formStudentValues;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formStudentValues);

    dispatch(
      startStudentRegister(
        documento,
        nombres,
        apellidos,
        usuario_un,
        estado,
        sexo,
        codigo,
        fecha_ingreso,
        cursando,
        documento_nacional,
        id_tipo_usuario
      )
    );
  };
  return (
    <div className='register-container'>
      <h1>Registrar un nuevo Estudiante</h1>
      <form className='register-container__form' onSubmit={handleRegister}>
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
          <label htmlFor='codigo' className='form_label'>
            Codigo
          </label>
          <input
            id='codigo'
            type='text'
            className='form_input'
            placeholder=''
            name='codigo'
            value={codigo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form_group'>
          <label htmlFor='fecha_ingreso' className='form_label'>
            Fecha de Ingreso
          </label>
          <input
            id='fecha_ingreso'
            type='text'
            className='form_input'
            placeholder=''
            name='fecha_ingreso'
            value={fecha_ingreso}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form_group'>
          <label htmlFor='cursando' className='form_label'>
            Cursando?
          </label>
          <input
            id='cursando'
            type='text'
            className='form_input'
            placeholder=''
            name='cursando'
            value={cursando}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form_group'>
          <label htmlFor='documento_nacional' className='form_label'>
            Documento Nacional?
          </label>
          <input
            id='documento_nacional'
            type='text'
            className='form_input'
            placeholder=''
            name='documento_nacional'
            value={documento_nacional}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form_group'>
          <label htmlFor='id_tipo_usuario' className='form_label'>
            Tipo de Usuario
          </label>
          <input
            id='id_tipo_usuario'
            type='text'
            className='form_input'
            placeholder=''
            name='id_tipo_usuario'
            value={id_tipo_usuario}
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

export default RegisterStudent;
