import React from 'react'; 
import {useState, useEffect } from "react"; 
import axios from "axios";  



export default function CitiList() {
    const baseUrl = "https://unilife-server.herokuapp.com/cities"; 
    const [citi, listCities] = useState([]); //set to the initial empty array

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(baseUrl); 
            console.log(request);
            return request; 
        }
        fetchData(); 
    },[])


  return (
    <div className="list_container">
        <h2>Student Accomodations in our top cities</h2>
        <div className="city_list">

        </div>
    </div>
  )
}
