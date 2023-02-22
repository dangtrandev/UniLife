import React from 'react'; 
import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts_container">
        <div className="email_container">
            <h3>Keep in touch</h3>
            <p>Curious about new offerings? 
                Sign up for our weekly newsletter and stay informed.</p>
            <input type="email" placeholder="type your email"/>
        </div>
    </div>
  )
}

export default Contacts