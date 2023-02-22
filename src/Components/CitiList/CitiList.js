import React from 'react'; 
import {useState, useEffect } from "react"; 
import axios from "axios";  
import CitiCard from '../CitiCard/CitiCard';
import "./CitiList.css";
export default function CitiList() {
    const baseUrl = "https://unilife-server.herokuapp.com/cities"; 
    const [city, setCities] = useState([]); //set to the initial empty array

    useEffect(()=>{
        axios
        .get(
            baseUrl
        )
        .then((result) => {
            setCities(result.data.response)
            // console.log(result); //checking data information after fetching 
        })
        .catch((err) => {
            console.log("error", err); 
        })
    },[])
    console.log(city);
    // console.log(city[0].image_url); //checking the data from city variable 

  return (
    <div className="list_container">
        <h2>Student Accomodations in our top cities</h2>
        {/*using the map function to list the citi with cityCard layout*/}
        <div className="city_list">
            {/* <img src={city[0].image_url}/> */}
            {city?.slice(0, -1).map((citi)=>{   
                return(
                <CitiCard 
                key         = {citi._id}
                name        = {citi.name}
                image_url   = {citi.image_url}
                property_count = {citi.property_count}
                />
                )
            })}
        </div>
        
        <button className="all-cities-btn"><a>See All Cities</a></button>
    </div>
  )
}
