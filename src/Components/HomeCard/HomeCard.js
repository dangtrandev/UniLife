import React from 'react'

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
      <div className="home_image">
        <img src={homeImage}/>
      </div>
    </div>
  )
}
