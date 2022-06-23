import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import GeneralInfo from '../templates/generalInfo/GeneralInfo';
import Home from '../templates/home/Home';
import Legal from '../templates/legal/Legal';
import LoginRoutes from './LoginRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

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
