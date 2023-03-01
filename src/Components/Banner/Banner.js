import React from 'react'; 
import "./Banner.css"; 
import HomePage from '../../Pages/HomePage';

export default function Banner({title, statement}) {

  return (
    <div>
        <div className="banner_container">
            <div className="banner_overlay">
                <div className="banner_info">
                    <h1>{title}</h1>
                    <p>{statement}</p>
                </div>
            </div>
        </div>
        
    </div>

  )
}
