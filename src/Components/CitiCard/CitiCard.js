import React from 'react'

export default function CitiCard(city) {
    const imageStyle = {
        backgroundImage:    `url(${city.image_url})`,
        backgroundRepeat:   "no-repeat", 
        backgroundPosition: "center", 
        width:              "400px",
        height:             "300px", 
        boxRadius:          "24px", 
    }
  return (
    <div style={imageStyle}>
        <p>{city.name}</p>
    </div>
  )
}
