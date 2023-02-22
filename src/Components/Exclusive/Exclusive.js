import React from 'react'; 
import "./Exclusive.css"; 

export default function exclusive () {
  return (
    <div className="exclusive_container">
        <div className="exclusive_box">
            <h3>Compare all inclusive student homes</h3>
            <div className="feature-container">
                <div className="feature-item">
                    <img src="" alt="search_logo" />
                    <h4>Search</h4>
                    <p>Find your dream home in the perfect area near your university.</p>
                </div>
                <div className="feature-item">
                    <img src="" alt="compare_logo"/>
                    <h4>Compare</h4>
                    <p>Compare student accomodation to find the right home for you.</p>
                </div>
                <div className="feature-item">
                    <img src="" alt="bill_logo"/>
                    <p>Bills are included in all rent prices.</p>
                    <p>No hidden fees.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
