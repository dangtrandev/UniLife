import React from 'react'; 
import "./Contacts.css";
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"; 
function Contacts() {
  return (
    <div className="contacts_container">
        <div className="email_container">
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? 
                Sign up for our weekly newsletter and stay informed.</p>
            <input type="email" placeholder="type your email"/>
        </div>

        <div className="social_container">
            <h3>Let's Socialize</h3>
            <div className="social_icons"><FaTwitter /> <p>Twitter</p></div>
            <div className="social_icons"><FaFacebook /> <p>Facebook</p></div>
            <div className="social_icons"><FaInstagram /> <p>Instagram</p></div>
        </div>
    </div>
  )
}

export default Contacts