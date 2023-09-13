import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    wishlist :[]
}

export const getWishlistData = createAsyncThunk('wishlist/getWishlistData',async(id,thunckAPI)=>{
    const response = await axios.get('https://my-server-rc7a.onrender.com/users/'+id)
    return response.data;
})


export const updateWishlistData = createAsyncThunk('wishlist/updateCartData',async(data)=>{
   await axios.patch('https://my-server-rc7a.onrender.com/users/'+data.id , {
        wishlist:data.wishlist

    },{
        headers: {
            'Content-Type': 'application/json'
          }
    })
})



const wishListSlice = createSlice({
  name:'wishlist',
  initialState,
  reducers:{
    addWishlistItem:(state,action)=>{
        const obj = state.wishlist.find(item=>item.id === action.payload.id)
        if(!obj){
            state.wishlist.push(action.payload)
        }
    },
    removeWishlistItem:(state,action)=>{
        const newProducts = state.wishlist.filter(item=>item.id !==action.payload.id)
        state.wishlist = newProducts;
    },
  },
  extraReducers:(builder=>{
    builder.addCase(getWishlistData.fulfilled,(state,action)=>{
        state.wishlist = action.payload.wishlist;
    })
})

})

export const Wishlist = wishListSlice.reducer
export const WishlistActions = wishListSlice.actions;