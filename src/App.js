import React from 'react'
import { Provider } from 'react-redux'
import AppRoutes from './routes/Routes'
import { store } from './store/store'
import './App.scss'

const App = () => {

  return (

    <Provider store={ store }>
      <AppRoutes/>
    </Provider>
  )
}

export default App