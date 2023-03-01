import React, { useEffect, useState } from 'react'; 
import Banner from '../Components/Banner/Banner';
import "../App.css";
import axios from "axios"; 
import SmallCitiCard from '../Components/SmallCitiCard/SmallCitiCard';


function SeeAllCitiPage() {
    const baseURL = "https://unilife-server.herokuapp.com/cities?limit=20"; 
    const [city, setCities] = useState([]); 

    useEffect(() => {
        axios
        .get(
            baseURL
        )
        .then((result) =>{
            setCities(result.data.response); 
            console.log(result); //checking data get from properties 
        })
        .catch((err) =>{
            console.log("error", err); 
        })
    }, [])
    console.log(city); 

  return (
    <div>
        <Banner 
        title="Student Accomodation"
        statement="UniLife have student accommodation available across the UK. Whatever you're after, we can help you find the right student accommodation for you. "/>
        <div className="small_city_list">
            {city?.map((citi) =>{
                return(
                    <SmallCitiCard
                    key     = {citi._id}
                    name    = {citi.name}
                    />
                )
            })}

        </div>
    </div>
  )
}

export default SeeAllCitiPage