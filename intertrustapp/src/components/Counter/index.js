import { useState } from "react"

// export const Counter =()=>{
//     const [count,setCount]=useState(0);
//     const increment=(e)=>{
//         setCount(count+1);
//     }
//     return(
//         <>
//             <h6>Count= {count}</h6>
//             <button className="btn btn-primary" onClick={increment}>Increment</button>
//         </>
//     )
// }

export const Counter =(props)=>{
    return(
        <h6>Count= {props.count}</h6>
    )
}
export const Increment =(props)=>{
    
    const increment=(e)=>{
        props.increment(e)
    }
    return(
        <button className="btn btn-primary" onClick={increment}></button>
    )
}