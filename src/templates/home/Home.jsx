import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../molecules/cards/Card'
import Info from '../../molecules/info/Info'
import Login from '../../organism/login/Login'
import { types } from '../../types/types'
import './Home.scss'

const Home = () => {

  return (
    <>
      <div className='home'>
        <div className='home_login'>
          <Login/>
        </div>
        <div className="home_info">
          <Info/>
          <div className="home_cards">
            <Card type={1} message="Información general" link="Informacion-General"/>
            <Card type={2} message="Información Legal" link="Informacion-Legal"/>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Home