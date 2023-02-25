import React from 'react'; 
import "./Exclusive.css"; 
import bill from "../../assets/Vectorbill.png"; 
import compare from "../../assets/Vectorcompare.png"; 
import search from "../../assets/Vectorsearch.png"; 

export default function exclusive () {
  return (
    <div className="exclusive_container">
        <div className="exclusive_box">
            <h3>Compare all inclusive student homes</h3>
            <div className="feature-container">
                <div className="feature_item">
                    <img src={search} alt="search_logo"/>
                    <h4>Search</h4>
                    <p>Find your dream home in the perfect area near your university.</p>
                </div>
                <div className="feature_item">
                    <img src={compare} alt="compare_logo"/>
                    <h4>Compare</h4>
                    <p>Compare student accomodation to find the right home for you.</p>
                </div>
                <div className="feature_item">
                    <img src={bill} alt="bill_logo"/>
                    <h4>Bills Included</h4>
                    <p>Bills are included in all rent prices.
                        No hidden fees. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
