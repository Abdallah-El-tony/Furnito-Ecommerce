import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    users:[]
}

export const getUsers = createAsyncThunk('user/getUsers',async()=>{
    const response = await axios.get('http://localhost:3000/users')
    return response.data
})

export const addUser = createAsyncThunk('user/addUser',async(user,thunkAPI)=>{
    const response = await axios.post('http://localhost:3000/users',user,{
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