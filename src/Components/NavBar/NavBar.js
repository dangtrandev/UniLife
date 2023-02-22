import React from 'react'; 
import "./NavBar.css"; 
import Vector from "../../assets/Vector.png"; 

function NavBar() {
  return (
    <div className="nav_container"> 
            <div className="logo_container">
                <img src={Vector} id="logo_brand" alt="logo_brand" width ="40.85px" height="29.6px" />
                <h1>UniLife</h1>
            </div>
        <div className="right_button">
            <button>
                Saved List 
            </button>
            <button>
                contact us
            </button>
        </div>
    </div>
  )
}

export default NavBar