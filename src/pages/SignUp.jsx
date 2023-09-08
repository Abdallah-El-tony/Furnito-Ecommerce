import React, { useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { BreadCrumb ,SelectBox} from '../components'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { addUser} from '../store/slices/userSlice'
import { AuthActions } from '../store/slices/AuthSlice'
import { useGetLocation } from '../hooks/useGetLocation'
import { userSchema } from '../Validations/UserValidation'

const SignUp = () => {
  useGetLocation()

  const {signUp} = AuthActions
  const dispatch = useDispatch()
  const navigate = useNavigate()

const [user,setUser] = useState([{
  name:"",
  email:"",
  userName:"",
  password:"",
  confirmPassword:"",
  city:""
}])


  const HandleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value , cart:[] , wishList:[]})
  }

  const submitHandler = ()=>{
    delete user.confirmPassword
    if(user.userName === undefined || user.password===undefined){
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
                    ):(<></>)}
                
                <label htmlFor="Country">Country</label>
                <SelectBox/>

                <label htmlFor="city">City*</label>
                <input id="city" type="text" 
                  placeholder='Type Your City'
                  className='form-control'name='city'
                  onChange={HandleChange}
                 />

                <div className="row justify-content-between align-items-center my-4">
                  <div className="col-12 col-md-6">
                    <label className="" htmlFor="rememberMe">Password*</label>
                    <input 
                    {...register("password")}
                    className="form-control"
                     type="password" id="password"
                      placeholder='Password'name='password'
                      onChange={HandleChange}
                      /> 
                      {errors.password?(
                      <p className='text-danger mb-0'>{errors.password.message}</p>
                      ):(<></>)}


                  </div>
                  <div className="col-12 col-md-6">
                    <label className="" htmlFor="confirm">Confirm Passowrd*</label>
                    <input 
                      {...register("confirmPassword")}
                       className="form-control"
                       type="password" id="confirm" placeholder='Confirm Passowrd'
                       name='confirmPassword'
                       onChange={HandleChange}
                       /> 
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