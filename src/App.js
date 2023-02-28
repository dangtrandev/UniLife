import React from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import './App.css';

import NavBar from './Components/NavBar/NavBar'; 
import Banner from './Components/Banner/Banner';
import CitiList from './Components/CitiList/CitiList'; 
import Exclusive from './Components/Exclusive/Exclusive';
import Selection from './Components/Selection/Selection';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer'; 

import HomePage from './Pages/HomePage';
import HomeDetailsPage from './Pages/HomeDetailsPage'; 
import CitiDetailsPage from './Pages/CitiDetailsPage';
import SeeAllCitiPage from './Pages/SeeAllCitiPage'; 
import { dom } from '@fortawesome/fontawesome-svg-core';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
     
  )
}

export default App
