// ** hooks
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

// ** redux
import { useDispatch, useSelector } from 'react-redux'
import { AuthActions } from '../store/slices/AuthSlice'

// ** axios import
import axios from 'axios'


const LoginForm = ({customStyle}) => {

    // ** hooks
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // store
    const {userId} = useSelector(state=>state.AuthReducer)
    const {users} = useSelector(state=>state.userReducer)
    const {login} =AuthActions;

    // ** stats
    const [UsersData,setUsersData] = useState([])
    const [isFound , setIsFound] = useState(true)
  
    const [user,setUser] = useState({
      userName:'',
      password:'',
      remember:false
    })
    const [values , setValues] = useState({
      userName: '',
      password:''
    })

    useEffect(()=>{
      const storedUserInfo = localStorage.getItem('userInfo');
      if (storedUserInfo) {
        const parsedUserInfo = JSON.parse(storedUserInfo);
        if(parsedUserInfo.id === userId) {
          setValues((prevValues) => ({
            ...prevValues,
            userName: parsedUserInfo.userName,
            password: parsedUserInfo.password,
            isChecked:parsedUserInfo.isChecked
            
          }));
        }
      }
      const getData = async()=>{
        const response = await axios.get('https://my-server-rc7a.onrender.com/users')
        setUsersData(response.data)
      }
      getData()
    },[users , userId,user.userName])
    
  
    useEffect(()=>{
      const storedUserInfo = localStorage.getItem('userInfo');
      if (storedUserInfo) {
        setUser(values)
      }
    },[values])
    const changeHandler =  (e)=>{
      setUser({...user,[e.target.name]:e.target.value,remember:e.target.checked})
    }
    
    const submitHandler  = (e)=>{
      e.preventDefault();

      const obj = UsersData.find(User=>User.userName === user.userName && User.password === user.password)
      if(obj) {
        dispatch(login(obj))
        navigate('/')
        if(user.remember){
          localStorage.setItem('userInfo',JSON.stringify({userName:user.userName,password:user.password, isChecked:user.remember ,id:obj.id}))
        }else {
          localStorage.removeItem('userInfo')
        }
        
      }else {
        setIsFound(false)
      }
    }

  return (
    <div className={`${customStyle?'col-12 col-xl-8':'col-md-10 col-lg-6'}`}>
        <h2 className='mb-3'>Sign In</h2>
        {!isFound && <p className='text-danger'>Invalid Username Or Password !</p>}
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username*</label>
          <input id="username" type="text" placeholder='Type Your Username' className='form-control mb-3' name='userName' required onChange={changeHandler} value={user.userName}/>
          
          <label htmlFor="password">Password*</label>
          <input id="password" type="password" placeholder='Type Your Passowrd' className='form-control' name='password' required onChange={changeHandler}  value={user.password}/>
          <div className="row justify-content-between align-items-center my-4">
            <div className="col">
              <input className="me-2 p-3" type="checkbox" id="rememberMe" checked={user.remember} onChange={changeHandler}/> 
              <label className="m-0" htmlFor="rememberMe">Remember me</label>
            </div>
            <div className="col  text-end">
              <Link className='text-secondary' to="/forgetpassword">Forgot Password?</Link>
            </div>
          </div>
          <input type="submit" className='custom-btn py-2 px-4 mb-3' value='Sign In'  />
          <p>Do not have an account <Link to="/signup" className='fw-semibold text-black'>Sign Up</Link></p>
        </form>
    </div>
  )
}

export default LoginForm