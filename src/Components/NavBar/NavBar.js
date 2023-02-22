import React from 'react'; 
import "./NavBar.css"; 
import Vector from "./Vector.png"; 

function NavBar() {
  return (
    <div className="nav_container"> 
        <button>
            <img src={Vector} id="logo_brand" alt="logo_brand" width ="40.85px" height="29.6px" />
        </button>
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