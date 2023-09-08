import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    compareList : []
}
const compareSlice = createSlice({
    name:'compare',
    initialState,
    reducers: {
        addProdcut:(state,action)=>{
            const obj = state.compareList.find(item=>item.id === action.payload.id)
            if(!obj){

                state.compareList.push(action.payload)
            }
        },
        removProduct:(state,action)=>{
            const newList = state.compareList.filter(item=>item.id!==action.payload.id)
            state.compareList = newList;
        }
    }
    

})

export const CompareReducer = compareSlice.reducer;
export const CompareActions = compareSlice.actions