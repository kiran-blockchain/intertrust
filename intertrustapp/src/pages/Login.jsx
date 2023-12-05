import { useEffect, useState } from "react"
import { Textbox } from "../components/Textbox"
import { loginConfig } from "../config/loginConfig"
import { Dropdown } from "../components/Dropdown";
import axios from "axios";
import { useApiGet } from "../hooks/useApiGet";

export const Login = () => {
    const [login, setLogin] = useState({
        username: "",
        password: "",
    });
    console.log("Before Calling hook");
    const unMappedCountryList = useApiGet("https://restcountries.com/v2/all");
    console.log("After Calling hook");
    const handleChange = (e) => {
        let newState = login;
        newState[e.target.name] = e.target.value;
        setLogin({ ...newState });
    };

    const countryList = () => {
        if (unMappedCountryList.data.length > 0) {
            return unMappedCountryList.data.map(x => {
                return { text: x.name, value: x.alpha3Code }
            })
        }else{
            return []
        }
    }

    return (
        <form className="mt-5">
            <Textbox config={loginConfig.username} onChange={handleChange} />
            <Textbox config={loginConfig.password} onChange={handleChange} />
            <Dropdown config={loginConfig.Gender} data={loginConfig.Gender.data} onChange={handleChange} />
            <Dropdown config={loginConfig.Country} data={countryList()} onChange={handleChange} />
            <h6 style={{ color: "white" }}>
                {JSON.stringify(countryList)}

            </h6>
        </form>

    )
}