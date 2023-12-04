import React from "react"
import { Header } from "./components/Header";
import { headerConfig } from "./config/headerConfig";

export const App = () => {
  const appName="InterTrust";
  return (
    <div className="container-fluid">
      <Header config={headerConfig}/>
    </div>
     
  )
}