import React from 'react'; 
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import { useParams } from 'react-router-dom';
import leftArrow from '../assets/left_arrow.svg'; 
import './HomeDetailsPage.css'; 
import bathIcon from '../assets/bath-icon.svg';
import bedIcon from '../assets/bed-icon.svg';
import BedroomPrice from '../Components/BedroomPrice/BedroomPrice'; 
import checkMark from '../assets/check_mark.svg';






export default function HomeDetailsPage() {
  const { homeId } = useParams(); 
  const [home, setHomes] = useState();
  const baseURL = "https://unilife-server.herokuapp.com/properties/"
  // console.log(homeId);
  useEffect(()=>{
    axios
    .get(`${baseURL}${homeId}`)
    .then(
      (result) =>{
        setHomes(result.data)
        // console.log(result);//checking the data we get from api
    })
    .catch((err)=>console.log(err))
  },[])
 
  console.log(home?.bedroom_prices); //checking the object

  // console.log(price);//chekcing the value of the array 

  // const priceList = document.getElementById(priceList); 
  // for (var i = 0; i < price.length(); i++){
  //   const li = document.createElement("li");
  //   li.appendChild(document.createTextNode(price[i])); 
  //   priceList.appendChild(li);
  // }

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
                  <p>{home?.address.street}, {home?.address.city}, Leeds {home?.address.postcode}</p>
                </div>
          </div>
                
          <div className= "detail_info_container">
            {/*  showing info for bathroom */}
            <div className="info_container">
              <p>Bedrooms</p>
              <div className="home_icon">
                <img src={bathIcon} className="blue-icon"/>
                <p className="blue_nums">{home?.bathroom_count}</p>
              </div>
            </div>
            {/* showing info for bedroom */}
            <div className="info_container">
              <p>Bathroom</p>
              <div className="home_icon">
                <img src={bedIcon} className="blue-icon"/>
                <p className="blue_nums">{home?.bedroom_count}</p>
              </div>
            </div>
            {/* showing info for propertytype */}
            <div className="info_container">
              <p>Property Type</p>
              <p className="blue_words">{home?.property_type}</p>
            </div>
            {/* showing info for price */}
            <div className="info_container">
              <p>Price</p>
              <p className="blue_nums">{home?.bedroom_prices.bedroom_one}</p>
            </div>
            {/* showing furnishing type */}
            <div className="info_container">
              <p>Furnished Type</p>
              <p className="blue_words">{home?.furnished}</p>
            </div>
          </div>
        </div>
      </div>
      {/*   the end of the homeDetailsPage_container */}

    {/* home's description and bedroom's price section */}
    <div className="desc_price_container">
      {/* description for home */}
      <div className="description_box">
        <h3>Description</h3>
        <p>{home?.property_description}</p>
      </div>
      {/* home's price */}
      <div className="price_box">
        <h3>Bedroom's price</h3>
        <div className="price_list" id="priceList">
          <div className="room">
          <p>Bedroom 1:</p>           
          <p>${home?.bedroom_prices.bedroom_one}/week</p>
          </div>
          <div className="line"></div>
          <div className="room">
          <p>Bedroom 2:</p>           
          <p>${home?.bedroom_prices.bedroom_two}/week</p>
          </div>
          <div className="line"></div>  
          <div className="room">
          <p>Bedroom 3:</p>           
          <p>${home?.bedroom_prices.bedroom_three}/week</p>
          </div>
          <div className="line"></div>
          <div className="room">
          <p>Bedroom 4:</p>           
          <p>${home?.bedroom_prices.bedroom_four}/week</p>
          </div>
          <div className="line"></div>
          <div className="room">
          <p>Bedroom 5:</p>           
          <p>${home?.bedroom_prices.bedroom_five}/week</p>
          </div>
        </div>
      </div>
    </div>

    {/* key features sections */}
    <div className="key_feature_container">
      <h3>Key Features</h3>
      <div className="key_feature_list">

        <div className="key_items">
          <img src={checkMark}/>
          <p>Great Size Period Property</p>
        </div>

        <div className="key_items">
          <img src={checkMark}/>
          <p>Four/ five bedrooms</p>
        </div>


        <div className="key_items">
          <img src={checkMark}/>
          <p>Two Reception Room</p>
        </div>


        <div className="key_items">
          <img src={checkMark}/>
          <p>OpenLand Dinning Kitchen</p>
        </div>

        <div className="key_items">
          <img src={checkMark}/>
          <p>Two Bath/Shower Rooms & Two WC's</p>
        </div>

      </div>

    </div>
  </div>
    

  )
}
