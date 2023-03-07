import React from 'react';
import { useEffect, useState, useContext } from 'react'; 
import { useParams } from "react-router-dom";
import axios from 'axios'; 
import Banner from '../Components/Banner/Banner';
import HomeList from '../Components/HomeList/HomeList';
import "./CitiDetailsPage.css"; 

export default function CitiDetailsPage() {
  const baseURL = "https://unilife-server.herokuapp.com/cities/"
  const { cityId } = useParams(); //achieve the id of the city from parameters 
  const [ city, setCities] = useState(); 

  //get the data from api with id of the cites 
  useEffect(()=>{
    axios
    .get(
      `${baseURL}${cityId}`
      )
    .then((result) => {
      setCities(result.data.data[0]); 
      // console.log(result); //checking the result data 
    })
    .catch(
      (err) => console.log(err)
      )
  },[cityId])
  // console.log(city);// checking the data city contains in city 
  // console.log(city?.property_count); 
  // console.log(city?.name);
  // console.log(city?._id);

  return (
    <div>
      <Banner 
      title="Search Accomodation"
      statement="Whatever you're after, we can help you find the right student accomodation for you"
      />
      <div className="home_search_bar">
        {/* dropdown button for MinBedroom */}
        <div className="select_option">
            <select id="room_type">
              <option value="">All Room Types</option>
              <option value="1">Single Room</option>
              <option value="2">Double Room</option>
              <option value="3">Suite Room</option>
            </select>
        </div>
        {/* dropdown button for MinBathroom */}
        <div className="select_option">
            <select id="bathroom_size">
              <option value="">All bathroom size</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
        </div>
      </div>
      <HomeList 
        city = {city}
        propertyCount = {city?.property_count}
        cityName = {city?.name}
        cityId = {city?._id}
      />
    </div>
  )
}