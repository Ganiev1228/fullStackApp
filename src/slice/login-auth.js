import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
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
    registerUserSucces: (state) => {},
    registerUserFailure: (state) => {},
  },
});

export const { loginUserStart, loginUserSucces, loginUserFailure } =
  loginSlice.actions;
export default loginSlice.reducer;
