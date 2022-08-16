import { useState, useEffect } from "react"
import axios from "axios"

const FetchData = (url:string) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setData(res.data) 
        }).catch(err => {
            console.log(err)
        })
    } , [url])

    return{ data }
}

export default FetchData