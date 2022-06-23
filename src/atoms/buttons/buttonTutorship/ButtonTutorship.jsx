import React from 'react'
import './ButtonTutorship.scss'

const ButtonTutorship = ({action}) => {
    return (
        <button className="buttonTutorship" type="submit" onClick={action}>
            <span className="text">Asignar Tutoría</span>
            <i className="icon">✓</i>
        </button>
    )
}

export default ButtonTutorship