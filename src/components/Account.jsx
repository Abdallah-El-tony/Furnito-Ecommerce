
// ** Icons
import {Person} from 'react-bootstrap-icons'

// ** react router
import { Link, useNavigate } from 'react-router-dom'

// ** redux
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from '../store/slices/AuthSlice';

const Account = () => {

  // ** hooks
  const {isAuth} = useSelector(state=>state.AuthReducer)
  const navigate = useNavigate()

  // ** redux
  const {logout} = AuthActions;
  const dispatch = useDispatch()

  const logOut = ()=>{
    
    // log out
    dispatch(logout())
    navigate('/login')
    window.location.reload()
  }

  return (
    <li className='position-relative dropdown'><button>{<Person size={25}/>}</button>
      <ul className='dropdown-minue'>
        {!isAuth?
        <>
            <Link  to="/login"><li className='dropdown-item'>Sign In</li></Link>
            <Link  to="signup"><li className='dropdown-item'>sign Up</li></Link>
        </> :
         <button onClick={logOut} className='w-100 border-0'><li className='dropdown-item'>Log Out</li></button> 
        } 
      </ul>
    </li>
  )
}

export default Account