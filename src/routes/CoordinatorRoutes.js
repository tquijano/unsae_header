import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Coordinator from '../templates/coordinator/Coordinator';

const CoordinatorRoutes = () => {

  const userType = useSelector( state => state.auth)

  console.log('userType', userType)

  return (
    <Routes>
      {/* <Route path="/Estudiante" element={<Students/>}/> */}
      {/* <Route path="/Profesor" element={<Teachers/>}/> */}
      <Route path="/" element={<Coordinator/>}/>

    </Routes>
  )
}

export default CoordinatorRoutes