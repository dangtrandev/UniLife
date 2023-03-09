import React from 'react'; 
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import { useParams } from 'react-router-dom';
import leftArrow from '../assets/left_arrow.svg'; 
import './HomeDetailsPage.css'; 



export default function HomeDetailsPage() {
  const { homeId } = useParams(); 
  const [home, setHomes] = useState();
  const baseURL = "https://unilife-server.herokuapp.com/properties/"
  console.log(homeId);
  useEffect(()=>{
    axios
    .get(`${baseURL}${homeId}`)
    .then(
      (result) =>{
        setHomes(result.data)
        console.log(result);//checking the data we get from api
    })
    .catch((err)=>console.log(err))
  },[])
  
  return (
    <div className="homeDetailsPage_container">
      <button className="back_btn">
        <img src={leftArrow} alt="left arrow" />
        <p> Back to Search</p>
      </button>

      <div className="homeDetails_container">
        {/* spot for the home picture  */}
        <div className="home_pics">
          <div className="largest_pics_container">
             <img src={home?.images[0]}  alt="house image"/>
          </div>
          <div className="smaller_pics_container">
            <img src={home?.images[1]}  alt="house image"/>
            <img src={home?.images[2]}  alt="house image"/>
            <img src={home?.images[3]}  alt="house image"/>
          </div>
        </div>
          
        {/* spot for the home info */}
        <div className="home_details_info">
          <div className="home_info">
                <div className="home_address">
                  <p>{home?.address.street}, {home?.address.city}, {home?.address.postcode}</p>
                </div>
          </div>
        </div>

      </div>

    </div>

  )
}
