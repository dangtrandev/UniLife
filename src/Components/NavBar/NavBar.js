import React from 'react'; 
import "./NavBar.css"; 
import Vector from "../../assets/Vector.png"; 
import Unilife from "../../assets/UniLife.svg";
import favoriteIcon from "../../assets/white_heart.svg"; 
import contactIcon from '../../assets/white_letter.svg';

import HomePage from '../../Pages/HomePage';

function NavBar() {
  return (
    <div className="nav_container"> 
            <div className="logo_container">
                <a href="/" alt="home_page">
                    <img src={Vector} id="logo_brand" alt="logo_brand" width ="40.85px" height="29.6px" />
                    <img src={Unilife} id="logo_name" alt="logo_name" width="102px" height="22px"/>
                </a>
            </div>
        <div className="right_button">
            <div className="shortlist_btn">
                <img src={favoriteIcon} />
                <button>
                    Saved List 
                </button>
            </div>
            <div className="contact_btn">
                <img src={contactIcon} />
                <button>
                    contact us
                </button>
            </div>
        </div>
    </div>
  )
}

export default NavBar