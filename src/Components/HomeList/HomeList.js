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
            // console.log(result); //checking the data from result 
        })
        .catch(
            (err) => console.log(err)
            ) 
    }, [])
    console.log(property);
  return (
    <div className="home_list_container">
        <h4>{propertyCount} homes in leeds</h4>
        <div className="home_container">
        {property?.map((home)=>(
            <HomeCard
            key={home._id}
            propertyCount = {home.property_count}
            bedroomCount = {home.bedroom_count}
            bathroomCount = {home.bathroom_count}
            propertyType = {home.property_type}
            propertyImage = {home.images[0]}
            propertyStreet = {home.address.street}
            propertyPostcode = {home.address.postcode}
            propertyCity = {home.address.city}
            />
        ))}
        </div>
    </div>
  )
}
