import { useState } from 'react';
import logo from '../constants/logo/fifa.svg'
import {Input} from '../ui'
import { useDispatch, useSelector } from 'react-redux';
import { signUserStart,signUserFailure, signUserSucces } from '../slice/login-auth';
import AuthService from '../service/auth';
import ValidationErrors from './validation-errors';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {isLoading} = useSelector(state=>state.loginn)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const registerHandler =(async e=>{
    e.preventDefault()
    dispatch(signUserStart())
    const user = {username:name,email,password}
    try {
      const response = await AuthService.userRegister(user)
      console.log(response)
      console.log(user)
      dispatch(signUserSucces(response.user))
      navigate('/')
    } catch (error) {
      dispatch(signUserFailure(error.message))
      
    }
  })

  return (
      <main className="form-signin w-50 m-auto">
        <form>
          <img
            className="d-block m-auto"
            src={logo}
            alt="fifa logo"
            width="94"
            height="75"
          />

          <h1 className="h3 mb-3 fw-normal text-center">Please register</h1>
          <ValidationErrors/>
         <Input label="Username" state={name} setState={setName}></Input>
         <Input label="Email address" state={email} setState={setEmail}></Input>
         <Input label="Password" type='password' state = {password} setState={setPassword}></Input>
        
          <button className="btn btn-primary w-100 py-2" type='submit'  onClick={registerHandler} disabled={isLoading}>
           {isLoading?"Loading":"Register"}
          </button>
        </form>
      </main>
  );
};


export default Register
