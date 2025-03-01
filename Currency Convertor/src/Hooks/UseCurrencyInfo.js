import react from 'react'

function CurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => (res.json))
        .then((res) => (res[currency]))


    }, [currency])

    return data


}

export default CurrencyInfo