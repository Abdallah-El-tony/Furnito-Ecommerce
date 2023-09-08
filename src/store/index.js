import { configureStore } from "@reduxjs/toolkit";
import { LoaderReducer , Cart ,  AuthReducer , CompareReducer , userReducer , Wishlist} from "./slices";


export const store = configureStore({
    reducer:{
        LoaderReducer,
        Cart,
        AuthReducer,
        Compare:CompareReducer,
        userReducer,
        Wishlist
    }
    
})