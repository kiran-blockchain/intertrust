import React, { useState } from "react"
import { Header } from "./components/Header";
import { headerConfig } from "./config/headerConfig";
import { Counter, Increment } from "./components/Counter";
import { Textbox } from "./components/Textbox";
import { loginConfig } from "./config/loginConfig";
import { Login } from "./pages/Login";
import { Parent } from "./components/Parent";
import { DemoFormMemo } from "./components/DemoUseMemo";
import CallBackDemo from "./components/CallbackDemo";

export const App=()=>{
  return(
    
          <div className="container-fluid">
            <Header config={headerConfig}/>
            <div className="row">
               {/* <Login/> */}
               {/* <Parent/> */}
               {/* <DemoFormMemo/> */}
               <CallBackDemo/>
            </div>
          </div>
  )
}



// export const App = () => {
//   // const appName="InterTrust";
//   // // const [count,setCount]= useState(0);
//   // // const handleClick = (e)=>{
//   // //   setCount(count+1);
//   // // }
//   return (
//     <div className="container-fluid">
//       <Header config={headerConfig}/>
//       {/* <Counter count={count}/>
//       <Increment increment ={handleClick}/> */}
//     </div>
     
//   )
// };
