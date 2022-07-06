import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantityOfItems:0
    },
    reducers:{
        addItemTpCart(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem){
                //! if new item does not exist then we will push the new item will all its properties to the items array as shown below
                state.items.push({itemId:newItem.id, price:newItem.price, quantity:1, totalPrice:newItem.price, name:newItem.title});
            }
            else{
                //! if we already have the item then simply increase the quantity by 1 and add the price into the existing price
               existingItem.quantity++;
               existingItem.totalPrice= existingItem.totalPrice + newItem.price;
            }
        },
        deleteItemFromCart(){

        },
    }
});

export default cartSlice;
export const artSliceActions = cartSlice.actions;