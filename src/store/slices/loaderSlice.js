const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
    loading:false
}
const loaderSlice = createSlice({
    name:'loading',
    initialState,
    reducers:{}
})
export const LoaderReducer = loaderSlice.reducer;
export const LoaderActions = loaderSlice.actions