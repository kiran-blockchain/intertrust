import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
import ProdcutReducer from "./ProdcutReducer";

export default configureStore({
    reducer:{
        cart:CartReducer,
        products:ProdcutReducer
    }
});