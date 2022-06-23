import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Teachers from '../templates/teachers/Teachers';

const TeacherRoutes = () => {

  const userType = useSelector( state => state.auth)

  console.log('userType', userType)

  return (
    <Routes>
      <Route path="/" element={<Teachers/>}/>
    </Routes>
  )
}

export default TeacherRoutes