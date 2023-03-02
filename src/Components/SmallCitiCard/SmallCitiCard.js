import React from 'react'; 
import "./SmallCitiCard.css"; 


export default function SmallCitiCard(citi) {
    //get the element in HTML by ID
    var button = document.getElementsByClassName("citi_btn"); // button is an array with list of many buttons
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("mouseover", function(){
            this.style.backgroundColor="#3A5295"; 
            this.style.color = "#FFFFFF"; 
        }); 
        
        button[i].addEventListener("mouseout", function(){
            this.style.backgroundColor = "#FFFFFF"; 
            this.style.color = ""; 
        })
        
    }
   
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

    }
    const hyperRef = `/HomeDetailsPage/${citi._id}`
  return (
    <div className="small-city-card-container" >
        <a href={hyperRef}>
            <button className="citi_btn" style={smallciticard}>{citi.name}</button>
            <p>{citi._id}</p>
        </a>

    </div>
  )
}
