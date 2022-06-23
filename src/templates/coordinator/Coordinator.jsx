import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import './Coordinator.scss'

const Coordinator = () => {

  const dispatch = useDispatch();

  // const { user, dispatch } = useContext(AuthContex)
   
  const {user} = useSelector(state => state.auth)
  console.log(user)
  

  // const navigate = useNavigate();
  const handleLogout = () =>{
    dispatch( startLogout() );
  }
  return (
    <>
      <br/>
      <br/>

      <br/>
      <div>Coordinator</div>
      <button className="buttonHome"
      onClick={handleLogout}>
          Logout
        </button>
    
    </>
  )
}

export default Coordinator