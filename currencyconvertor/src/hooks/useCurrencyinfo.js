import{useState, useEffect} from 'react'

function Currencyinfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/d057e47feeaa8ffa1af75553/latest/${currency}`)
        .then((res)=> res.json())
        .then((res) => setData(res[currency]))
    },[currency])

    console.log("data"+ data)
    
    return data;
}

 export default Currencyinfo;