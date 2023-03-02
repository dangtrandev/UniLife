import React from 'react'; 
import { useEffect, useState, useContext } from 'react'; 
import { useParams } from "react-router-dom";
import axios from 'axios'; 
import Banner from '../Components/Banner/Banner';
import HomeList from '../Components/HomeList/HomeList';


export default function HomeDetailsPage() {
  const baseURL = "https://unilife-server.herokuapp.com/cities"
  const { cityId } = useParams(); //achieve the id of the city from parameters 
  const [ city, setCities] = useState(); 

  //get the data from api with id of the cites 
  useEffect(()=>{
    axios
    .get(
      `${baseURL}/${cityId}`
      )
    .then((result) => {
      setCities(result.data); 
      // console.log(result); //checking the result data 
    })
    .catch(
      (err) => console.log(err)
      )
  },[])
  // console.log(city); checking the data city contains in city 

  return (
    <div>
      <Banner 
      title="Search Accomodation"
      statement="Whatever you're after, we can help you find the right student accomodation for you"
      />
      <HomeList 
      popertyCount = {city.property_count}
      
      />
    </div>
  )
}
