import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slice/login-auth'

export default configureStore({
  reducer: {
    loginn:loginReducer},
})