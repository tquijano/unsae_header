import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Bienestar from '../templates/bienestar/Bienestar';
import Coordinator from '../templates/coordinator/Coordinator';
import Students from '../templates/students/Students';
import Teachers from '../templates/teachers/Teachers';

const LoginRoutes = () => {

  const {uid} = useSelector( state => state.auth)

  console.log('userType', uid)

  if ( uid ) {
    switch (String(uid)){
      case '1':
        return (
          <Routes>
            <Route path="/Estudiante" element={<Students/>}/>
          </Routes>
        )
      case '2':
        return (
          <Routes>
            <Route path="/Profesor" element={<Teachers/>}/>
          </Routes>
        )
      case '3':
        return (
          <Routes>
            <Route path="/Bienestar/" element={<Bienestar/>}/>
          </Routes>
        )
      case '4':
        return (
          <Routes>
            <Route path="/Coordinador" element={<Coordinator/>}/>
          </Routes>
        )
    }
  }
}

export default LoginRoutes