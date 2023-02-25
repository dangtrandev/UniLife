import React from 'react'; 
import "./NavBar.css"; 
import Vector from "../../assets/Vector.png"; 
import Unilife from "../../assets/UniLife.svg";

function NavBar() {
  return (
    <div className="nav_container"> 
            <div className="logo_container">
                <a href="index.html" alt="home_page">
                    <img src={Vector} id="logo_brand" alt="logo_brand" width ="40.85px" height="29.6px" />
                    <img src={Unilife} id="logo_name" alt="logo_name" width="102px" height="22px"/>
                </a>
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