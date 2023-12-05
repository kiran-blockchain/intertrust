import { Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Products } from "./pages/Products"
import { Cart } from "./pages/Cart"

export const AppRoutes = () => {
    return (<Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="*" element={<Login />}></Route>
    </Routes>
    )

}