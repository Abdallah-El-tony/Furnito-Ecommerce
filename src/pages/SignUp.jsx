// ** Components
import { BreadCrumb ,SelectBox} from '../components'

// ** react imports
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

// rect router
import { Link, useNavigate } from 'react-router-dom'

// redux
import { useDispatch} from 'react-redux'
import { addUser} from '../store/slices/userSlice'
import { AuthActions } from '../store/slices/AuthSlice'
import { useGetLocation } from '../hooks/useGetLocation'

// Hooks & custom Hooks
import { userSchema } from '../Validations/UserValidation'

// bootstrap Icons
import { Eye , EyeSlash } from 'react-bootstrap-icons'
import axios from 'axios'

const SignUp = () => {

  // ** change web title
  useGetLocation()

  // Hooks
  const {signUp} = AuthActions
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // states
  const [showPassword,setShowPassword] = useState(false)
  const [user,setUser] = useState([{
    name:"",
    email:"",
    userName:"",
    password:"",
    confirmPassword:"",
    city:"",
  }])
  const [users,setUsers] = useState([])
  const [isFound,setIsFound] = useState(false)

  const HandleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value , cart:[],wishlist:[]})
  }

  //  ** get users
  useEffect(()=>{
    const getData = async()=>{
      const response = await axios.get('https://my-server-rc7a.onrender.com/users')
      setUsers(response.data)
    }
    getData()
  },[user.email])

  // form validation
  const submitHandler = ()=>{
    delete user.confirmPassword

    const obj = users.find((User)=>User.email === user.email )
    
    if(user.userName === undefined || user.password===undefined || obj){
      setIsFound(true)
      console.log(isFound)
      return
    }
      dispatch(addUser(user))
      dispatch(signUp())
      navigate('/')
  } 

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm({
    resolver:yupResolver(userSchema)
  })

  return (
    <>
      <BreadCrumb title="User Regester" url='logout'/>
      <section className='py-5 my-4'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <h2 className='mb-3'>Sign Up</h2>
              <form onSubmit={handleSubmit(submitHandler)}>

                <label htmlFor="name">Name*</label>
                <input id="name" {...register("name")}
                  type="text" placeholder='Type Your Name' 
                  className='form-control mb-3'name='name' 
                  onChange={HandleChange}  />
                {errors.name?(<span className='text-danger'>{errors.name.message}</span>):(<></>)}<br/>
                
                <label htmlFor="username">Username*</label>
                <input id="username" 
                {...register("userName")}
                  type="text" placeholder='Type Your Username'
                  className='form-control mb-3'name='userName'
                  onChange={HandleChange}  />
                {errors.userName?(<p className='text-danger'>{errors.userName.message}</p>):(<></>)}
                
                <label htmlFor="email">Email Address*</label>
                <input 
                    {...register("email")}
                    id="email" 
                    type="email"
                    placeholder='Type Your Email'
                    className='form-control mb-3'name='email'
                    onChange={HandleChange} 
                    />
                    {errors.email?(
                    <p className='text-danger'>{errors.email.message}</p>
                    ):isFound?<p className='text-danger'>This Email is Already Exist</p>:(<></>)}
                
                <label htmlFor="Country">Country</label>
                <SelectBox/>

                <label htmlFor="city">City*</label>
                <input id="city" type="text" 
                  placeholder='Type Your City'
                  className='form-control'name='city'
                  onChange={HandleChange}
                 />

                <div className="row justify-content-between align-items-center my-4">
                  <div className="col-12 col-md-6 position-relative">
                    <label className="" htmlFor="rememberMe">Password*</label>
                    <div className='position-relative'>
                      <input 
                      {...register("password")}
                        className="form-control"
                        type={showPassword?'text':'password'} id="password"
                        placeholder='Password'name='password'
                        onChange={HandleChange}
                        /> 
                        <span className='position-absolute eye' onClick={()=>setShowPassword(!showPassword)}>{showPassword?<EyeSlash size={20}/>:<Eye size={20}/>}</span>
                    </div>
                      {errors.password?(
                      <p className='text-danger mb-0'>{errors.password.message}</p>
                      ):(<></>)}

                  </div>
                  <div className="col-12 col-md-6 position-relative">
                    <label className="" htmlFor="confirm">Confirm Passowrd*</label>
                    <div className='position-relative'>
                        <input 
                         {...register("confirmPassword")}
                          className="form-control"
                          type={showPassword?'text':'password'} placeholder='Confirm Passowrd'
                          name='confirmPassword'
                          onChange={HandleChange}
                          />
                    </div> 
                       
                    {errors.confirmPassword?(
                    <p className='text-danger mb-0'>{errors.confirmPassword.message}</p>
                    ):(<></>)}
                  </div>
                </div>
                <input type="submit" className='custom-btn py-2 px-4 mb-3' value='Sign Up'/>
                <p>Already have an account <Link to="/login" className='fw-semibold text-black'>Sign In</Link></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp