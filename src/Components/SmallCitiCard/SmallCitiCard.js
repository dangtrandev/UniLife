import React from 'react'; 


export default function SmallCitiCard(citi) {
    const smallciticard= {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "302px", 
        height: "88px", 
        alignText: "center", 
    }
  return (
    <div className="small-city-card-container" style={smallciticard}>
        <p>{citi.name}</p>
    </div>
  )
}
