import React from 'react'; 
import './App.css';
import NavBar from './Components/NavBar/NavBar'; 
import Banner from './Components/Banner/Banner';
import CitiList from './Components/CitiList/CitiList'; 



function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <CitiList />
    </div>
     
  )
}

export default App
