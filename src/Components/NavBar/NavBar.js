import React from 'react'; 
import "./NavBar.css"; 

function NavBar() {
  return (
    <div className="nav_container"> 
        <button>
            <img src="Vector.jpg" alt="logo_brand" width ="40.85px" height="29.6px" />
        </button>

        <div className="right_button">
            <a><i class="bi bi-heart"></i></a>
        </div>
    </div>
  )
}

export default NavBar