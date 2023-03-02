import React, { useEffect, useState } from 'react'; 
import Banner from '../Components/Banner/Banner';
import "../App.css";
import axios from "axios"; 
import SmallCityBTN from '../Components/SmallCitiCard/SmallCityBTN';


function SeeAllCitiPage() {
    const allCitiesContainer = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column", 
        padding: "80px 80px 120px 80px", 
        alignItems: "center",
    }
    const headerStyle ={
        marginBottom: "120px",
    }

    const smallCard_container ={
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "space-around", 

    }
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
        <div className="small_city_list" style={allCitiesContainer}>
            <h4 style={headerStyle}>Search By City</h4>
            <div className="smallCard_container" style={smallCard_container}>
                {city.map((city) =>(
                            <SmallCityBTN
                            key     = {city._id}
                            cityId  = {city._id}
                            name    = {city.name}
                            />
                    )
                )}
            </div>
        </div>
    </div>
  )
}

export default SeeAllCitiPage