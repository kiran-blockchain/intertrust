import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <label data-testid="count">{count}</label>
            <button data-testid="btnOne" id="btnOne" onClick={e => {
                setCount(count + 1);
            }}>Increment</button>
             <button data-testid="btnTwo" id="btnTwo" onClick={e => {
                if(count>0){
                    setCount(count-1)
                };
            }}>Decrement</button>
        </div>
    )
}