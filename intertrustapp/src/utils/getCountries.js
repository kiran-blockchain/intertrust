export const getCountries = async()=>{
    try{
        let result = await axios.get("https://restcountries.com/v2/all");
        console.log(result.data);
        let mappedData = result.data.map(x=>{
            return{text:x.name,value:x.alpha3Code}
        })
        return mappedData;
    }
    catch(ex){
        console.log(ex);
    }
};