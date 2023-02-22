import React from 'react'; 
import "./NavBar.css"; 
import "./Vector.png";
function NavBar() {
  return (
    <div className="nav_container"> 
        <button>
            <img src="Vector.png" alt="logo_brand" width ="40.85px" height="29.6px" />
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