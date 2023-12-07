import React from "react";
import { Route, Routes } from "react-router"
import { Home } from "./Home";
const MfeApp = React.lazy(() => import("mfe/MfeApp"));
export const AppRoutes = () => {
    return (
    <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/mfe" element={<MfeApp/>} ></Route>
    </Routes>
    )
}