import axios from 'axios'
import { getItem } from '../helpers/persistance-storage'

axios.defaults.baseURL= 'http://localhost:3000/api'

axios.interceptors.request.use(config=>{
  const token = getItem('token')
  const authtoken = token?`Token ${token}`:""
  config.headers.Authorization=authtoken
  return config
})

export default axios