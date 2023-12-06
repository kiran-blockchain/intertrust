import { useContext, useEffect } from "react"
import { CounterContext } from "../provider/CounterContext";

export const Products = () => {
    const ctx = useContext(CounterContext)
    useEffect(() => {
        return (() => {
            console.log("Unloading")
        })
    });
    const handleClick =(e)=>{
        ctx.increment()
    }
    return (
        <div>
            <button className="btn btn-danger"
                onClick={handleClick}
            >Increment Count</button>
            <h1>I am Products Page</h1>
        </div>
    )
}