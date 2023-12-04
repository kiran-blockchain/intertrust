import React, { useState } from "react"
import { Header } from "./components/Header";
import { headerConfig } from "./config/headerConfig";
import { Counter, Increment } from "./components/Counter";

export const App = () => {
  const appName="InterTrust";
  const [count,setCount]= useState(0);
  const handleClick = (e)=>{
    setCount(count+1);
  }
  return (
    <div className="container-fluid">
      <Header config={headerConfig}/>
      <Counter count={count}/>
      <Increment increment ={handleClick}/>
    </div>
     
  )
};
