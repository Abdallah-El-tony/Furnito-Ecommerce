import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { AuthActions } from '../store/slices/AuthSlice'
import axios from 'axios'
import { Link } from 'react-router-dom'

const LoginForm = ({customStyle}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
  
    const {users} = useSelector(state=>state.userReducer)
    const {login} =AuthActions;
    const [UsersData,setUsersData] = useState([])
  
    useEffect(()=>{
      const getData = async()=>{
        const response = await axios.get('http://localhost:3000/users')
        setUsersData(response.data)
      }
      getData()
    },[users])
  
    const [user,setUser] = useState({
      userName:'',
      password:''
    })
    const [isFound , setIsFound] = useState(true)
  
  
    const changeHandler =  (e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }
    
    const submitHandler  = (e)=>{
      e.preventDefault();
  
      const obj = UsersData.find(User=>User.userName === user.userName && User.password === user.password)
      if(obj) {
        dispatch(login(obj))
        navigate('/')
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
          <input id="username" type="text" placeholder='Type Your Username' className='form-control mb-3' name='userName' required onChange={changeHandler}/>
          
          <label htmlFor="password">Password*</label>
          <input id="password" type="password" placeholder='Type Your Passowrd' className='form-control' name='password' required onChange={changeHandler}/>
          <div className="row justify-content-between align-items-center my-4">
            <div className="col">
            <input className="me-2 p-3" type="checkbox" value="" id="rememberMe"/> 
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