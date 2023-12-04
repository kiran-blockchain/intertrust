import { useState } from "react"
import { Textbox } from "../components/Textbox"
import { loginConfig } from "../config/loginConfig"
import { Dropdown } from "../components/Dropdown";

export const Login =()=>{
    const[ login,setLogin]= useState({
        username:"",
        password:""
    });
    const handleChange = (e)=>{
        let newState = login;
        newState[e.target.name]=e.target.value;
        setLogin({...newState});
    };
    return(
        <form className="mt-5">
            <Textbox config={loginConfig.username} onChange={handleChange}/>
            <Textbox config={loginConfig.password} onChange={handleChange}/>
            <Dropdown config={loginConfig.Gender} onChange={handleChange}/>
            <h6 style={{color:"white"}}>
                {JSON.stringify(login)}
                
                </h6>
        </form>

    )
}