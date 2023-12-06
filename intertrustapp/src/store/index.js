import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
import ProdcutReducer from "./ProdcutReducer";
import AuthReducer from "./AuthReducer";

export default configureStore({
    reducer:{
        cart:CartReducer,
        products:ProdcutReducer,
        auth:AuthReducer
    }
});