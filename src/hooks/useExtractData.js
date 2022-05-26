import { useState, useEffect } from "react"

function useExtractData(endpoint){
    const [data,setData]=useState('')
    useEffect(()=>{
        fetch(`http://localhost:3030/data/${endpoint}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return data
}

export default useExtractData