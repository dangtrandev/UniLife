import React from 'react'; 
import "./HomeCard.css"; 
import bedIcon from "../../assets/bed-icon.svg"; 
import bathIcon from "../../assets/bath-icon.svg"; 
import locationIcon from "../../assets/location-icon.svg"; 
import homeIcon from "../../assets/home-icon.svg";
import {Link} from 'react-router-dom';

export default function HomeCard(
 {  homeId,
    homeImage, 
    bedroomPrice,
    bedroomCount,
    bathroomCount,
    homeType, 
    homeFurnish, 
    homeStreet, 
    homeCity, 
    homePostcode,
 }
) {
  console.log(homeStreet);
  const hyperREF = `/HomeDetailsPage/${homeId}`;
  return (
    <div className="homeCard_container">
        <img className ="property_image" src={homeImage}/>
        <div className ="property_info">
          <div className="property_price">
            <h3>${bedroomPrice}</h3>
            <p>pppw including bills</p>
          </div>
          <div className="property_rooms">
            <div className="number_room">
              <img src={bedIcon}  />
              <p>{bedroomCount}</p>
            </div>
            <div className="number_room">
              <img src={bathIcon}/>
              <p>{bathroomCount}</p>
            </div>
          </div>
        </div>
        <div className="home_info">
          <div className="home_furnish_type">
            <h4>{homeType}</h4>
            <h4>{homeFurnish}</h4>
          </div>
          <div className="home_location">
            <img src={locationIcon} />
            <p>{homeStreet}, {homeCity}, {homePostcode}</p>
          </div>
        </div>
      
        <button className="viewHome_btn" id={homeId}>
          <img src={homeIcon}/>
          <a href={hyperREF}>
          <p>View Home</p>
          </a>
        </button>
  
    </div>
  )
}
