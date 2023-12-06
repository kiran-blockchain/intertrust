import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
    name:"cart",
    initialState:{
        totalPrice:0,
        items:[]
    },
    reducers:{
        //action
        addToCart:(state,action)=>{
            return{...state,items:[...state.items,action.payload]}

        },
        //action
        removeFromCart:(state,action)=>{

        },
        //action
        resetCart:(state,action)=>{
            return{...state,items:[],totalPrice:0}
        }
    }

});

export const {addToCart,removeFromCart,resetCart} = CartReducer.actions;
export default CartReducer.reducer;




