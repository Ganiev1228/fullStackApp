import { createSlice } from "@reduxjs/toolkit";

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
    //LOGIN
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSucces: (state) => {},
    loginUserFailure: (state) => {},
    //REGISTER
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSucces: (state) => {
      state.isLoading=false
      state.loggedIn=true

    },
    registerUserFailure: (state) => {
      state.isLoading=false
      state.error='errorrr'
    },
  },
});

export const { loginUserStart, loginUserSucces, loginUserFailure,registerUserStart,registerUserSucces,registerUserFailure } =
  loginSlice.actions;
export default loginSlice.reducer;
