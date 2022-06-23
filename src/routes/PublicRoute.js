import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
  const { uid } = useSelector( state => state.auth);
  console.log('uid', uid)
  console.log(typeof(uid))

  if ( uid ) {
    switch (String(uid)){
      case '1':
        return <Navigate to='/Estudiante/'/>
      case '2':
        return <Navigate to='/Profesor/'/>
      case '3':
        return <Navigate to='/Bienestar/'/>
      case '4':
        return <Navigate to='/Coordinador/'/>
    } 
  }else{
    console.log('Entre a else')
    return children
  }

}

export default PublicRoute
