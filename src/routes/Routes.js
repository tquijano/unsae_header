import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import Bienestar from '../templates/bienestar/Bienestar';
import GeneralInfo from '../templates/generalInfo/GeneralInfo';
import Home from '../templates/home/Home';
import Legal from '../templates/legal/Legal';
// import CoordinatorRoutes from './CoordinatorRoutes';
import LoginRoutes from './LoginRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
// import StudentRoutes from './StudentRoutes';
// import TeacherRoutes from './TeacherRoutes';

const AppRoutes = () => {

  const dispatch = useDispatch();
  const { checking } = useSelector( state => state.auth);

  useEffect(() => {
    dispatch ( startChecking() );
  }, [dispatch])
  

  if (checking) {
    return <p>Un momento...</p>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Informacion-General" element={<GeneralInfo/>}/>
        <Route path="/Informacion-Legal" element={<Legal/>}/>
        <Route path="/" 
          element={
            <PublicRoute>
              <Home/>
            </PublicRoute>
          }
        />

        {/* <Route path="/Estudiante/*" 
          element={
            <PrivateRoute> 
              <StudentRoutes/>
            </PrivateRoute>
          }
        />

        <Route path="/Profesor/*" 
          element={
            <PrivateRoute> 
              <TeacherRoutes/>
            </PrivateRoute>
          }
        />

        <Route path="/Coordinador/*" 
          element={
            <PrivateRoute> 
              <CoordinatorRoutes/>
            </PrivateRoute>
          }
        /> */}

        <Route path="/*" 
          element={
            <PrivateRoute> 
              <LoginRoutes/>
            </PrivateRoute>
          }
        />

        
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;
