import React from 'react'; 
import "./Selection.css";


export default function () {
  return (
    <div className="selection_container">
        <div className="selection_box">
            <div className="selection_items">

                <div className="selection_info">
                  <h4>Best Selection</h4>
                  <p>Best selection of student accommodations. 
                    Never been easier to find a home that’s 
                    right for you.</p>
                </div>

                <div className="selection_info">
                  <h4>Your Favorite</h4>
                  <p>Shortlist your favourite properties and 
                    send enquiries in one click.</p>
                </div>

                <button>Search & Compare</button>

            </div>
        </div>   
    </div>
  )
}
