import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            //mutating the state here 
            // redux tool kit uses immer bTS
            const newItem =action.payload;
            const existingItem = state.items.find(
        (item) => item.card.info.id === newItem.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }},
        removeItem:(state)=>{
            state.items.pop();
        },
         clearCart: (state)=>{
            state.items.length=0;
         }
    }
})

export const {addItem,removeItem,clearCart}= cartSlice.actions;
export default cartSlice.reducer;