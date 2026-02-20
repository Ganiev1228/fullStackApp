import { createSlice } from "@reduxjs/toolkit";
import {setItem} from '../helpers/persistance-storage'
const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
   
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSucces: (state,action) => {
      state.isLoading=false
      state.loggedIn=true
      state.user= action.payload
      state.error=null
      setItem("token",action.payload.token)

    },
    signUserFailure: (state,action) => {
      state.isLoading=false
      state.loggedIn= false
      state.error=action.payload
    },
  },
});

export const { signUserStart,signUserSucces,signUserFailure } =
  loginSlice.actions;
export default loginSlice.reducer;
