import { useEffect, useState } from "react"
import { Textbox } from "../components/Textbox"
import { loginConfig } from "../config/loginConfig"
import { Dropdown } from "../components/Dropdown";
import axios from "axios";
import { useApiGet } from "../hooks/useApiGet";
import { useFormik } from "formik";
import { loginSchema } from "../utils/loginSchema";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../store/AuthReducer";
import { useNavigate } from "react-router";

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector(x=>x.auth);
    if(auth.token.length>0){
        navigate("/products");
    }
    const formik = useFormik({
        validationSchema:loginSchema,
        initialValues: {
            username: 'kminchelle',
            password: '0lelplR',
            confirmPassword:"0lelplR"
        },
        onSubmit:(values)=>{
            console.log(values);
            dispatch(authenticateUser(values))
        }
    })
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
        formik.handleChange(e);
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
            <Textbox config={loginConfig.username} onChange={handleChange} formik={formik} />
            <Textbox config={loginConfig.password} onChange={handleChange} formik={formik} />
            {/* <Textbox config={loginConfig.confirmPassword} onChange={handleChange} formik={formik} />
            <Dropdown config={loginConfig.Gender} data={loginConfig.Gender.data} onChange={handleChange} />
            <Dropdown config={loginConfig.Country} data={countryList()} onChange={handleChange} /> */}
            <button className="btn btn-primary"
            onClick={formik.handleSubmit}
            >Login</button>
        </form>

    )
}