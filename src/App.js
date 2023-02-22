import React from 'react'; 
import './App.css';
import NavBar from './Components/NavBar/NavBar'; 
import Banner from './Components/Banner/Banner';
import CitiList from './Components/CitiList/CitiList'; 
import Exclusive from './Components/Exclusive/Exclusive';
import Selection from './Components/Selection/Selection';


function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <CitiList />
      <Exclusive />
      <Selection />
    </div>
     
  )
}

export default App
