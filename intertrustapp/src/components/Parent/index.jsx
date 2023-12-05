import { memo, useState } from "react"

export const Parent=()=>{
    const[one,setOne]= useState("one");
    const[two,setTwo]= useState("two");
    return(
        <div>
            <ChildOne data={one}/>
            <ChildTwo data={two}/>
            <button className="btn btn-primary"
                onClick={e=>{
                    setOne("First Updated")
                }}
            >
                Update Fist
            </button>
            <button className="btn btn-primary"
                onClick={e=>{
                    setTwo("Second Updated")
                }}
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