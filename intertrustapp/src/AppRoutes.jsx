import { Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Products } from "./pages/Products"
import { Cart } from "./pages/Cart"
import { Suspense, lazy } from "react"
import Protected from "./components/Protected"
//const ProductsInfo = lazy(()=>import("./pages/Products"))
export const AppRoutes = () => {
    const showLoader = () => {
        return <h6>...... Loading</h6>
    }
    return (<Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/products" element={<Protected>
            <Products />
        </Protected>}></Route>
        <Route path="/cart" element={<Protected><Cart /></Protected>}></Route>

        <Route path="*" element={<Login />}></Route>
    </Routes >
    )

}