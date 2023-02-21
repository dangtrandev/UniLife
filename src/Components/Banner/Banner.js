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
                {/* search by city button */}
                <div class="dropdown-center">
                    <button class="btn option-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Search By City
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Action two</a></li>
                        <li><a class="dropdown-item" href="#">Action three</a></li>
                    </ul>
                </div>
                {/*Choosing Room button*/}
                <div class="dropdown-center">
                    <button class="btn option-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Any Room 
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">1-2 people</a></li>
                        <li><a class="dropdown-item" href="#">3-4 people</a></li>
                        <li><a class="dropdown-item" href="#">5-6 people</a></li>
                    </ul>
                </div>
                {/*Finds Home Button*/}
                    <button class="btn find-button">Find Homes</button>
            </div>
        </div>
    </div>

  )
}
