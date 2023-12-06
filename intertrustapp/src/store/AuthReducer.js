import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authenticateUser = createAsyncThunk(
    'auth/authenticateUser',
    async (login) => {
        try {
            console.log(login);
            const res = await axios.post('https://dummyjson.com/auth/login', { username: login.username, password: login.password })
            const data = await res.data;
            return data
        } catch (ex) {
            return "Error in logging in user";
        }
    }
);
const AuthReducer = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        "id": 15,
        "username": "",
        "email": "",
        "firstName": "",
        "lastName": "",
        "gender": "",
        "image": "",
        "token": ""
    },
    reducers: {
        login: (state, action) => {
            if (action.payload.token != "") {
                return { ...state, isLoggedIn: true, token: action.payload.token }
            } else {
                return {
                    ...state,
                    isLoggedIn: false,
                    token: ""
                }
            }
        },
        logout: (state, action) => {
            return {
                ...state,
                isLoggedIn: false,
                token: ""
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(authenticateUser.pending, (state) => {
            return { ...state, isLoggedIn: false }
        })
        builder.addCase(authenticateUser.fulfilled, (state, action) => {
            return { ...state, isLoggedIn: true, ...action.payload }
        })
        builder.addCase(authenticateUser.rejected, (state) => {
            return { ...state, isLoggedIn: false }
        })
    }
});

export const { login, logout } = AuthReducer.actions;
export default AuthReducer.reducer;