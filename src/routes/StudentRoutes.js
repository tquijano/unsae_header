import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Students from '../templates/students/Students';

const StudentRoutes = () => {

  const userType = useSelector( state => state.auth)

  console.log('userType', userType)

  return (
    <Routes>
      <Route path="/" element={<Students/>}/>
    </Routes>
  )
}

export default StudentRoutes