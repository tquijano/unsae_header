import React from 'react'
import { useDispatch } from 'react-redux'
import { tutorshipAssignment } from '../../../actions/tutors';
import './ButtonsPendingTutorship.scss'

const ButtonsPendingTutorship = ({ documento_docente, documento_estudiante, fecha_tutoria, estado_tutoria }) => {
    const dispatch = useDispatch();

    const handleChangeTutorshipSi = (e) => {
        console.log('HOLAA SOY EL BOTON SI', documento_docente, documento_estudiante, fecha_tutoria.split('T')[0], 1);
        e.preventDefault();
        dispatch(
            tutorshipAssignment(
                documento_docente,
                documento_estudiante,
                fecha_tutoria.split('T')[0],
                "docente",
                1
            )
        );
    }
    const handleChangeTutorshipNO = (e) => {
        console.log('HOLAA SOY EL BOTON NO', documento_docente, documento_estudiante, fecha_tutoria.split('T')[0], 2);
        e.preventDefault();
        dispatch(
            tutorshipAssignment(
                documento_docente,
                documento_estudiante,
                fecha_tutoria.split('T')[0],
                "docente",
                2
            )
        );
    }
    return (

        <div className='buttonsPendingTutorship'>
            <p>{estado_tutoria} <br/>Desea Aceptarla?</p>
            <div className='buttonsPendingTutorship_container'>
                <button className='yes' onClick={handleChangeTutorshipSi}>SI</button>
                <button className='no' onClick={handleChangeTutorshipNO}>NO</button>
            </div>
        </div>
    )
}

export default ButtonsPendingTutorship