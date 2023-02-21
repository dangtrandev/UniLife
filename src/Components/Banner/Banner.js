import React from 'react'; 
import "./Banner.css"; 

export default function Banner() {

  return (
    <div>
        <div className="banner_container">
            <div className="banner_overlay">
                <div className="banner_info">
                    <h1>Find Student Homes with Bill Included</h1>
                    <p>A simple and fastest way to search for student accomodation</p>
                </div>
            </div>
        </div>
        <div className="search_container">
            <div className="button_box">
                <button>Search by City</button>
                <button>Any Room</button>
                <button>Find Homes</button>
            </div>
        </div>
    </div>

  )
}
