import React from 'react'; 
import "./SmallCityBTN.css"; 
import { Link } from "react-router-dom"; 


export default function SmallCitiCard({
    city,
    cityId, 
    name, 
}) {
    //get the element in HTML by ID
    // var button = document.getElementsByClassName("citi_btn"); // button is an array with list of many buttons
    // for (let i = 0; i < button.length; i++) {
    //     button[i].addEventListener("mouseover", function(){
    //         this.style.backgroundColor="#3A5295"; 
    //         this.style.color = "#FFFFFF"; 
    //     }); 
        
    //     button[i].addEventListener("mouseout", function(){
    //         this.style.backgroundColor = "#FFFFFF"; 
    //         this.style.color = ""; 
    //     })
        
    // }
   
    const smallciticard= {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "302px", 
        height: "88px", 
        alignTexts: "center", 
        border: "solid 1px #CED3D8", 
        borderRadius: "24px",
        marginBottom: "24px",
        fontSize: "28px", 
        fontWeight: "600",
        marginRight: "24px",
        backgroundColor: "#FFFFFF"

    }; 
    const hyperRef = `/HomeDetailsPage/${cityId}`; 


  return (
    // <a href={hyperRef}>
    <div className="small-city-card-container" >
            <button className="citi_btn" id={cityId} style={smallciticard}>{name}</button>

    </div>
    // </a>
  )
}
