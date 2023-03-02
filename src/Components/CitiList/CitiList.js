import React from 'react'; 
import { useState, useEffect } from "react"; 
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
            console.log(result); //checking data information after fetching 
        })
        .catch((err) => {
            console.log("error", err); 
        })
    },[])
    console.log(city);
    // console.log(city[0].image_url); //checking the data from city variable 

  return (
    <div className="list_container">
        <div className="search_container">
            <div className="button_box">
                {/* search by city button */}
                <div className="dropdown-center">
                    <button className="btn option-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Search By City
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Action two</a></li>
                        <li><a className="dropdown-item" href="#">Action three</a></li>
                    </ul>
                </div>
                {/*Choosing Room button*/}
                <div className="dropdown-center">
                    <button className="btn option-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Any Room 
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">1-2 people</a></li>
                        <li><a className="dropdown-item" href="#">3-4 people</a></li>
                        <li><a className="dropdown-item" href="#">5-6 people</a></li>
                    </ul>
                </div>
                {/*Finds Home Button*/}
                    <button className="btn find-button">Find Homes</button>
            </div>
        </div>
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
        
        <button className="all-cities-btn"><a href="/SeeAllCitiPage">See All Cities</a></button>
    </div>
  )
}
