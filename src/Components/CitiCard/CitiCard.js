import React from 'react'

export default function CitiCard(city) {
    const imageStyle = {
        backgroundImage:    `url(${city.image_url})`,
        backgroundRepeat:   "no-repeat", 
        backgroundPosition: "center", 
        width:              "400px",
        height:             "300px", 
        borderRadius:       "24px", 
        marginRight:        "40px",
        marginBottom:       "40px",
    };
    // const cardStyle = {
    //     display:        "flex", 
    //     justifyContent: "center", 
    //     alignItems:     "center", 
    //     color:          "white", 
    //     fontSize:       "40px", 
    //     fontWeight:     "600"

  return (
    <div style={imageStyle}>
        <div className="card-overlay">
            <p>{city?.name}</p>
        </div>
        
    </div>
  )
}
