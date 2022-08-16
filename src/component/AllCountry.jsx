import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import FetchData from "../FetchData";

export default function CountryCard(){
    let { data } = FetchData("https://restcountries.com/v3.1/all");
  

    return (
        <div className=" pt-10 flex flex-wrap justify-start bg-primary" style={{minHeight:"100vh"}}>
             {data .map((country, index) => (
          <div className="w-64 shadow-lg my-4 rounded m-4" key={index}> 
            <img className="w-full object-cover h-48" src={country.flags.svg} alt="" />
            <div className="px-6 py-4 bg-white h-48">
              <div className="font-bold text-xl mb-2 country_name">{country.name.common}</div>
              <div>
                <div><b>Population</b>: <span className="text-gray-500">{country.population}</span></div>
                <div><b>Region</b>: <span className="text-gray-500">{country.region}</span></div>
                <div><b>Capital</b>: <span className="text-gray-500">{country.capital}</span></div>
              </div>
            </div>
          
          </div> 
          ))}
          </div>

    )
}