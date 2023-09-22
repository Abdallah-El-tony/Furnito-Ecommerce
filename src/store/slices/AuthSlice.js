
import axios from "axios";

// ** redux
const { createSlice } = require("@reduxjs/toolkit");


// ** get user length
const getTotalUsers = async()=>{
    const response = await axios.get('https://my-server-rc7a.onrender.com/users')
    return response.data
}

// ** getTotalUsers call
(async () => {
    try {
      const data = await getTotalUsers();
      localStorage.setItem('totalUsers',JSON.stringify(data.length))
    } catch (error) {
        console.log(error)
    }
  })();

    const initialState= {
    isAuth:JSON.parse(localStorage.getItem('isAuth')) || false,
    userId:JSON.parse(localStorage.getItem('totalUsers')) || 0,
    totalUsers:JSON.parse(localStorage.getItem('totalUsers')) || 0
}

const AuthSlice = createSlice ({
    name:'auth',
    initialState,
    reducers:{
        signUp:(state,action)=>{
            state.isAuth = true;
            localStorage.setItem('isAuth',JSON.stringify(state.isAuth))
            state.totalUsers++;
            localStorage.setItem('totalUsers',JSON.stringify(state.totalUsers))
            state.userId = JSON.parse(localStorage.getItem('totalUsers'))
            localStorage.setItem('userId',JSON.stringify(state.userId))
        },
        login:(state,action)=>{
            state.isAuth = true;
            localStorage.setItem('isAuth',JSON.stringify(state.isAuth))
            state.userId = action.payload.id;
            localStorage.setItem('userId',JSON.stringify(state.userId))
        },
        logout:(state,action)=>{
            state.isAuth  = false;
            localStorage.setItem('isAuth',JSON.stringify(state.isAuth))
        }

    }
})

export const  AuthReducer = AuthSlice.reducer;
export const  AuthActions = AuthSlice.actions