import React from 'react'; 
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import HomeCard from '../HomeCard/HomeCard';


export default function HomeList({
    city,
    propertyCount, 
    cityName,
    cityId,
}){
    const baseURL = "https://unilife-server.herokuapp.com/properties/city/"
    const propertiesURL = `${baseURL}${cityId}`; 
    const [property, setProperties] = useState([]);
    useEffect(()=>{
        axios
        .get(
            propertiesURL
        )
        .then((result) =>{
            setProperties(result.data.response); 
            console.log(result);
        })
        .catch(
            (err) => console.log(err)
            ) 
    }, [city])
    console.log(property);
  return (
    <div className="home_list_container">
        <h4>{propertyCount} homes in leeds</h4>
        

    </div>
  )
}
