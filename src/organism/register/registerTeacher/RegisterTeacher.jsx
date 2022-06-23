import React from "react";
import "./RegisterTeacher.scss";
import { useDispatch } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { startTeacherRegister } from "../../../actions/auth";

const RegisterTeacher = () => {
    const dispatch = useDispatch();

    const initialForm = {
        documento: "1012",
        nombres: "test",
        apellidos: "node",
        usuario_un: "2561",
        estado: "1",
        sexo: "1",
        id_tipo_usuario: "2",
        id_departamento: "1",
    };

    const [formValues, handleInputChange] = useForm(initialForm);

    const {
        documento,
        nombres,
        apellidos,
        usuario_un,
        estado,
        sexo,
        id_tipo_usuario,
        id_departamento,
    } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(formValues);

        dispatch(
            startTeacherRegister(
                documento,
                nombres,
                apellidos,
                usuario_un,
                estado,
                sexo,
                id_tipo_usuario,
                id_departamento
            )
        );
    };

    return (
        <div className='registerTeacher-container'>
            <h1>Registrar un nuevo Docente</h1>
            <form
                className='registerTeacher-container__form'
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
                    <label htmlFor='id_departamento' className='form_label'>
                        Departamento
                    </label>
                    <input
                        id='id_departamento'
                        type='text'
                        className='form_input'
                        placeholder=''
                        name='id_departamento'
                        value={id_departamento}
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

export default RegisterTeacher;
