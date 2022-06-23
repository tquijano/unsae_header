
// const state = {
//   name: 'Estudiante',
//   logged: true
// }

// const loginAction = {
//   type: types.login,
//   payload: {
//     name: 'Estudiante',
//     rol: 'Estudiante'
//   }
// }
import { types } from "../types/types";

const insialState = {
  checking: true,
  // username
}


export const authReducer = ( state = insialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        checking: false,
        ...action.payload,
      }
    case types.authCheckingFinish:
      return{
        ...state,
        checking:false
      }
    case types.authLogout:
      return {
        checking: false
      }
  
    default:
      return state;
  }
}