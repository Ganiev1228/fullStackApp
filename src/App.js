import {Main,Login,Register,Navbar} from './components'
import {Route, Routes} from 'react-router-dom'
const App = () => {
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
