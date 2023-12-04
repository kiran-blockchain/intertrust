import { useState } from "react"

export const Counter =()=>{
    const [count,setCount]=useState(0);
    const increment=(e)=>{
        setCount(count+1);
    }
    return(
        <>
            <h6>Count</h6>
            <button className="btn btn-primary" onClick={increment()}>Increment</button>
        </>
    )
}