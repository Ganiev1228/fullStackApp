import { useState } from 'react';
import logo from '../constants/logo/fifa.svg'
import {Input} from '../ui'
import { useDispatch, useSelector } from 'react-redux';
import { loginUserStart } from '../slice/login-auth';

const Register = () => {

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {isLoading} = useSelector(state=>state.loginn)
  const dispatch = useDispatch()
  const registerHandler =(e=>{
    // e.preventDefault()
    dispatch(loginUserStart())
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
         <Input label="Username" state={name} setState={setName}></Input>
         <Input label="Email address" state={email} setState={setEmail}></Input>
         <Input label="Password" type='password' state = {password} setState={setPassword}></Input>
        
          <button className="btn btn-primary w-100 py-2"  onClick={registerHandler} disabled={isLoading}>
           {isLoading?"Loading":"Register"}
          </button>
        </form>
      </main>
  );
};


export default Register
