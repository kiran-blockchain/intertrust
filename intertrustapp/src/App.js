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
import { DemoRef } from "./components/DemoRef";
import { DemoRef2 } from "./components/DemoRef/DemoRef2";
import { DemoUsePrevious } from "./components/DemoPrevious";
import { AppRoutes } from "./AppRoutes";

export const App=()=>{
  return(
    
          <div className="container-fluid">
            <Header config={headerConfig}/>
            <div className="row">
              <AppRoutes/>
              {/* <DemoUsePrevious/> */}
               {/* <Login/> */}
               {/* <Parent/> */}
               {/* <DemoFormMemo/> */}
               {/* <CallBackDemo/> */}
               {/* <DemoRef/>
               <DemoRef2/> */}
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
