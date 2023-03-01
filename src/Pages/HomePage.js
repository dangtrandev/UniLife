import React from 'react'; 
import "../App.css"; 

import NavBar from '../Components/NavBar/NavBar'; 
import Banner from '../Components/Banner/Banner';
import CitiList from '../Components/CitiList/CitiList'; 
import Exclusive from '../Components/Exclusive/Exclusive';
import Selection from '../Components/Selection/Selection';
import Contacts from '../Components/Contacts/Contacts';
import Footer from '../Components/Footer/Footer'; 



export default function HomePage() {
    
  return (
    <div>
        <Banner 
        title="Find the student home with bill included"
        statement="A simple and faster way to search for student accomodation"/>
        <CitiList />
        <Exclusive />
        <Selection />
    </div>
  )
}
