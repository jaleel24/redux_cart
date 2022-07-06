import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name:'UI',
    initialState:{CartVisible:false},
    reducers:{
       toggleCart(state){
            state.CartVisible = !state.CartVisible
        },
       

    }
});
export default uiSlice;
export const uiSliceActions = uiSlice.actions;