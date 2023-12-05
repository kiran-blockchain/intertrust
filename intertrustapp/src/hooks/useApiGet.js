import axios from "axios";
import { useEffect, useState } from "react"

export const useApiGet = (url) => {
    console.log("I am inside the hook");
    const [apiResult, setData] = useState({
        data: '',
        error: ''
    });
    const getData = async()=>{
        console.log("Inside the api get");
        try{
            let result = await axios.get(url);
            setData({data:result.data,error:""})
            console.log("Inside the api get success");
        }
        catch(ex){
            setData({data:null,error:"Error in Fetching the Data"})
            console.log("Inside the api get failure");
        }
    }
    
    useEffect(()=>{
        console.log("Inside useEffect of hook")
        getData();
    },[]);
  
    return apiResult;
}