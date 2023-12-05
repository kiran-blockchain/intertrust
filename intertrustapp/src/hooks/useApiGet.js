import axios from "axios";
import { useEffect, useState } from "react"

export const useApiGet = (url) => {
    const [apiResult, setData] = useState({
        data: '',
        error: ''
    });
    const getData = async()=>{
        try{
            let result = await axios.get(url);
            setData({data:result.data,error:""})
        }
        catch(ex){
            setData({data:null,error:"Error in Fetching the Data"})
        }
    }
    
    useEffect(()=>{
        getData();
    },[]);
  
    return apiResult;
}