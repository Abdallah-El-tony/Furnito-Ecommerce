import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    users:[]
}

export const getUsers = createAsyncThunk('user/getUsers',async()=>{
    const response = await axios.get('https://my-server-rc7a.onrender.com/users')
    return response.data
    
})
export const getTotalUsers = createAsyncThunk('user/getTotalUsers',async()=>{
    const response = await axios.get('https://my-server-rc7a.onrender.com/users')
    console.log(response.data.length)
    return response.data.length;
    
})

export const addUser = createAsyncThunk('user/addUser',async(user,thunkAPI)=>{
    const response = await axios.post('https://my-server-rc7a.onrender.com/users',user,{
        headers: {
            'Content-Type': 'application/json',
          },
    })
    return response.data;
    
})
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
    },
    extraReducers:{
        [getUsers.fulfilled]:(state,action)=>{
            state.users = action.payload
        },


        // ====== add User ======//
        [addUser.fulfilled]:(state,action)=>{
           
            state.users.push(action.payload)
        },

        

    }
})

export const userReducer= userSlice.reducer;
export const userActions = userSlice.actions