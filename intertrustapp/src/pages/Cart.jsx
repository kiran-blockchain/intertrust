import { useSelector } from "react-redux"

export const Cart =()=>{
    const cart = useSelector(x=>x.cart);
    return(
        <div>
        <h1>I am Cart Page</h1>
        <pre>
            {JSON.stringify(cart.items)}
        </pre>
        </div>
    )
}