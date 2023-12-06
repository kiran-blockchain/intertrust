import { useContext, useEffect } from "react"
import { CounterContext } from "../provider/CounterContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/CartReducer";
import { fetchProducts } from "../store/ProdcutReducer";

export const Products = () => {
    const ctx = useContext(CounterContext);
    const products = useSelector(x=>x.products);
    //redux hook to trigger the actions
    const dispatch = useDispatch();
    useEffect(() => {
        return (() => {
            console.log("Unloading")
        })
    });
    const handleClick =(e)=>{
        ctx.increment()
    }
    const add =()=>{
        dispatch(addToCart({id:1,name:"iPhone"}))
    }
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    return (
        <div>
            <button className="btn btn-danger"
                onClick={handleClick}
            >Increment Count</button>
            <button className="btn btn-success" onClick={add}>
                Add To Cart
            </button>
            <h1>I am Products Page</h1>
            <pre>{JSON.stringify(products)}</pre>
        </div>
    )
}