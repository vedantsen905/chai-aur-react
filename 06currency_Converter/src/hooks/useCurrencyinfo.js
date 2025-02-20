 import {useState , useEffect} from 'react';

function useCurrencyinfo(currency){
    const [data , setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}`)
        .then((response) => response.json())
        .then((response) => setData(response[currency]))
    }
    , [currency])
    
return data;
    }

export default useCurrencyinfo;
    
