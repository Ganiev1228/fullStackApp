import { useState } from 'react';
import logo from '../constants/logo/fifa.svg'
import {Input} from '../ui'
import {loginUserStart} from '../slice/login-auth'
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isLoading} = useSelector(state=>state.loginn)
  console.log(isLoading)
  const loginHandler =((e)=>{
    e.preventDefault()
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

          <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
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
