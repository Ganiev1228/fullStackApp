import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slice/login-slice'
import articleReducer from '../slice/article-slice'
export default configureStore({
  reducer: {
    loginn:loginReducer,
    articles:articleReducer}
})