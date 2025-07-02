import { createSlice } from "@reduxjs/toolkit";
import reducer, { addItem, clearCart } from "./cartSlice";


const userSlice= createSlice({
    name: "user",
    initialState: {
       items: []
    },
    reducer:{
        addItem: (state, action)=>{
            state.action.push(action.payload)
        },
        removeItem: (state)=>{
            state.action.pop();
        },
        clearCart:(state)=>{
            state.action.length=0;
        }
    }
}
)
export const {addItem,removeItem,clearCart}=userSlice.actions;

export default userSlice.reducer;