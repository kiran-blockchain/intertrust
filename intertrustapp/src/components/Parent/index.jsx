import { memo,useMemo, useState } from "react"

export const Parent=()=>{
    const[one,setOne]= useState(1);
    const[two,setTwo]= useState("two");
    const expensiveCalculation =()=>{

    }
    const handleClickOfFirst =(e)=>{
        setOne(one+1)
    }
    const handleClickOfSecond =(e)=>{
        setTwo(two+1)
    }

    return(
        <div>
            <ChildOne data={one}/>
            <ChildTwo data={two}/>
            <button className="btn btn-primary"
                onClick={handleClickOfFirst}
            >
                Update Fist
            </button>
            <button className="btn btn-primary"
                onClick={handleClickOfSecond}
            >
                Update Second
            </button>
        </div>
    )
}

export const ChildOne=memo((props)=>{
    console.log("I am child one");
    return(
        <h1>I am child  {props.data}</h1>
    )
})
export const ChildTwo=memo((props)=>{
    console.log("I am child two");
    return(
        <h1>I am child  {props.data}</h1>
    )
})