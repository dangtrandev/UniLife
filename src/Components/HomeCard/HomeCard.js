import React from 'react'; 
import "./HomeCard.css"; 

export default function HomeCard(
 { homeImage, 
  // bedroomCount, 
  // bathroomCount, 
  // propertyType, 
  // propertyImage, 
  // propertyStreet, 
  // propertyPostcode, 
  // propertyCity
 }
) {
  return (
    <div className="homeCard_container">
      <div className="home_info">
        <img className ="property_image" src={homeImage}/>
        <div className ="property_info">
        
        </div>
      </div>
    </div>
  )
}
