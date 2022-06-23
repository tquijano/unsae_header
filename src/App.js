import React from 'react'
import { Provider } from 'react-redux'
// import { AuthContex } from './auth/authContext'
// import { authReducer } from './auth/authReducer'
import AppRoutes from './routes/Routes'
import { store } from './store/store'
import './App.scss'

const App = () => {

  // const init = () => {
  //   return JSON.parse(localStorage.getItem('user')) || { logged: false};
  // }

  
  
  // const [user, dispatch] = useReducer(authReducer, {}, init)
  
  // useEffect(() => {
  //   if (!user) return;

  //   localStorage.setItem('user', JSON.stringify(user))
  // }, [user])

  return (
    // <AuthContex.Provider value={{
    //   user,
    //   dispatch
    // }}>
    <Provider store={ store }>
      <AppRoutes/>
    </Provider>
    // </AuthContex.Provider>
  )
}

export default App