import axios from "axios";
import React, { useEffect, useState } from "react";
const Page1 = (props) => {
  console.log(props)
  console.log("i am good")
  const [products, setProducts] = useState(null)
  // const getProducts = async () => {
  //   try {
  //     let result = await axios.get('https://dummyjson.com/products');
  //     setProducts(result.data);
  //   } catch (ex) {
  //     return 'Error in Fetching data'
  //   }
  // }
  // useEffect(() => {
  //   getProducts();
  // }, []);
  return (
    <div>
      <pre>{JSON.stringify(props.data)}</pre>
    </div>
  )
}



export const getServerSideProps=async()=>{
  let result ={
    data:"",
    error:""
  };
    try {
       let res = await axios.get('https://dummyjson.com/products');
       result.data= res.data;
    } catch (ex) {
      result.error= 'Error in Fetching data'
    }
    return {props:result}
}

export default Page1;