import {Main,Login,Register,Navbar} from './components'
import {Route, Routes} from 'react-router-dom'
import AuthService from './service/auth'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { signUserSucces } from './slice/login-auth'
import { getItem } from './helpers/persistance-storage'
const App = () => {

const dispatch = useDispatch()
  const getUser =(async()=>{
   try {
     const resp = await AuthService.getUser() 
    dispatch(signUserSucces(resp.user))
   } catch (error) {
    
   }
  })
  useEffect(()=>{
    const token = getItem('token')
    if(token){
      getUser()
    }
  },[])

  return (
    <div>
      <Navbar></Navbar>
   <Routes>

    <Route path='/' element={<Main/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
   </Routes>
    </div>
  )
}

export default App
