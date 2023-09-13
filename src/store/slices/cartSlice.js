import axios from "axios";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    cartList:[]
}

export const getCartData = createAsyncThunk('cart/getCartData',async(id,thunckAPI)=>{
    const response = await axios.get('https://my-server-rc7a.onrender.com/users/'+id)
    return response.data;
})


export const updateCartData = createAsyncThunk('cart/updateCartData',async(data)=>{
   await axios.patch('https://my-server-rc7a.onrender.com/users/'+data.id , {
        cart:data.cart

    },{
        headers: {
            'Content-Type': 'application/json'
          }
    })
})

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const obj = state.cartList.find(item=>item.id === action.payload.id)
            if(obj){
                obj.quantity++;
            }else {
                state.cartList.push(action.payload)
            } 
        },
        increase:(state,action)=>{
            const obj = state.cartList.find(item=>item.id === action.payload.id)
            obj.quantity++;
        },
        decrease:(state,action)=>{
            const obj = state.cartList.find(item=>item.id === action.payload.id)
            if(obj.quantity > 1)
                obj.quantity--;
        },
        change:(state,action)=>{
            const obj = state.cartList.find(item=>item.id === action.payload.id)
            if(obj.quantity < 1) {
                obj.quantity = 1;
            }else {
                obj.quantity = 5
            }
        },
        removeItem:(state,action)=>{
            const newProducts = state.cartList.filter(item=>item.id !==action.payload.id)
            state.cartList = newProducts;
        },
        clearAll:(state,action)=>{
            state.cartList = []
        }


    },
    extraReducers:(builder=>{
        builder.addCase(getCartData.fulfilled,(state,action)=>{
            state.cartList = action.payload.cart;
        })
    })

})

export const Cart = CartSlice.reducer;
export const cartAtions = CartSlice.actions