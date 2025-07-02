import React from "react";
import {useEffect , useState} from "react";
function  useCurrencyInfo(eur)
{
    const [data , setData] = useState({})
   useEffect(()=>
{
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${eur}.json`)
    .then((res)=> res.json())
    .then((res) => setData(res[eur]))
}, [eur])
  console.log(data);
  return data
}
export default  useCurrencyInfo;