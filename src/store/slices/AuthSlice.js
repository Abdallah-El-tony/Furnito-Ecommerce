const { createSlice } = require("@reduxjs/toolkit");
const initialState= {
    isAuth:JSON.parse(localStorage.getItem('isAuth')),
    userId:JSON.parse(localStorage.getItem('userId')),
    totalUsers:JSON.parse(localStorage.getItem('totalUsers'))
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
            state.userId = state.totalUsers;
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