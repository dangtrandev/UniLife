import React from 'react'; 
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import HomeCard from '../HomeCard/HomeCard';
import "./HomeList.css";


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
            console.log(result); //checking the data from result 
        })
        .catch(
            (err) => console.log(err)
            ) 
    }, [cityId])
    // console.log(property[0]?.images[0]);
  return (
    <div className="home_list_container">
        <h4 id="num_home_leed">{propertyCount} homes in leeds</h4>
        {/* <img src={property?.images[0]}/> */}
        <div className="home_container">
        {property?.map((home)=>(
            <HomeCard
            key             ={home._id}
            homeId          ={home._id}
            homeImage       ={home?.images[0]}
            bedroomPrice    ={home?.bedroom_prices.bedroom_one}
            bedroomCount    ={home?.bedroom_count}
            bathroomCount   ={home?.bathroom_count}
            homeType        ={home?.property_type}
            homeFurnish     ={home?.furnished}
            homeStreet      ={home?.address.street}
            homeCity        ={home?.address.city}
            homePostcode    ={home?.address.postcode}
            />
        ))}
        </div>
    </div>
  )
}
