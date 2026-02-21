import { useEffect, useState } from 'react';
import logo from '../constants/logo/fifa.svg'
import {Input} from '../ui'
import { signUserFailure, signUserStart, signUserSucces} from '../slice/login-slice'
import { useDispatch, useSelector } from 'react-redux';
import AuthService from '../service/auth';
import ValidationErrors from './validation-errors';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isLoading,loggedIn} = useSelector(state=>state.loginn)
  const navigate = useNavigate()

  const loginHandler =(async(e)=>{
    e.preventDefault()
    const user = {email,password}
    dispatch(signUserStart())
    try {
      const response = await AuthService.userLogin(user)
      console.log(response)
      console.log(response.user)
      dispatch(signUserSucces(response.user))
      navigate('/')
    } catch (error) {
      console.log("errororo"+error)
      dispatch(signUserFailure(error.message))
    }
  })
  useEffect(()=>{
    if(loggedIn){
      navigate('/')
    }
  },[loggedIn])
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

          <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
          <ValidationErrors></ValidationErrors>
         <Input label="Email address" state={email} setState={setEmail}></Input>
         <Input label="Password" type={'password'} state={password} setState={setPassword}></Input>
          
          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="checkDefault"
            />
            <label className="form-check-label" htmlFor="checkDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit" onClick={loginHandler} disabled={isLoading} >
            {isLoading?'Loading...':'Login'}
          </button>
          <p className=" text-center mt-5 mb-3 text-body-secondary">© 2017–2025</p>
        </form>
      </main>
  );
};

export default Login;
