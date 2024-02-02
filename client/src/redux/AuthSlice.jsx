import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const initialState = {
  loading: false,
  user: {}, // for user object
  redirectTo: null,
  Logouttoggle: true,
  userName: false,
  redirectReg: null
}


export const registerUser = createAsyncThunk("Sign", async (user) => {
  try {
    const ress = await axios.post("http://localhost:4225/api/register", user);
    // console.log(ress?.data);
    return ress?.data;

  } catch (error) {
    toast(error?.response?.data?.msg);
    console.log(error);
  }
});

export const loginRequest = createAsyncThunk("Log", async (user) => {
  try {
    const res = await axios.post("http://localhost:4225/api/login", user);
    return res?.data;
  } catch (error) {
    toast(error?.response?.data?.message);
    console.log(error);
  }
});



export const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //check for auth token 
    check_token: (state, { payload }) => {
      let token = localStorage.getItem("token");
      if (token !== null && token !== undefined) {
        state.Logouttoggle = true;
      }
    },

    logout: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      toast("logout successfully")
      state.Logouttoggle = false

    },


    RegLog: (state, { payload }) => {
      localStorage.removeItem("name");
      state.Logouttoggle = false

    },

    redirectToo: (state, { payload }) => {
      state.redirectTo = payload
    },

    redirectTo_Register: (state, { payload }) => {
      state.redirectReg = payload
    }


  },

  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {

      if (payload.success === true) {
        localStorage.setItem("name", payload.data.name)
        state.redirectReg = "/Log"
        //toast(payload?.token)
        toast(`hi ${payload?.data?.name} Register successfully`)
      }

    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

    //login
    [loginRequest.pending]: (state, action) => {
      state.loading = true;
    },
    [loginRequest.fulfilled]: (state, { payload }) => {
      if (payload) {
        localStorage.setItem("token", payload?.token);
        localStorage.setItem("name", payload?.user.name);
        // localStorage.setItem("id", payload?.user._id);
        // localStorage.setItem("email", payload?.user.email);
        // localStorage.setItem("image", payload?.user.image);
        state.Logouttoggle = true
        state.redirectTo = "/"
        toast(`Hi ${payload?.user.name} ${payload?.message}`)
      }

    },
    [loginRequest.rejected]: (state, action) => {
      state.loading = false;

    },
  },
})

export const {
  check_token, redirectToo, logout, redirectTo_Register, RegLog } = AuthSlice.actions

