import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        try {
            const res = await axios('https://dummyjson.com/products')
            const data = await res.data;
            return data
        } catch (ex) {
            return "Error in fetching products";
        }
    }
);
const ProductReducer = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        "total": 0,
        "skip": 0,
        "limit": 0,
        "products": []
    },
    reducers: {
        //action

    },
    extraReducers: (builder) => {
        //before making
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
        //success
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.products = action.payload.products;
            state.limit = action.payload.limit;
            state.total = action.payload.total;
        })
        //failed 
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }

});

//export const {addToCart,removeFromCart,resetCart} = Product.actions;
export default ProductReducer.reducer;




