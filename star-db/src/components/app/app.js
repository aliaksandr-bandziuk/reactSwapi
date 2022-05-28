import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
import StarshipDetails from "../starship-details";

import './app.scss';

const App = () => {
  return(
    <div className="container-app">
      <Header/>
      <RandomPlanet/>  
      <Routes>
        <Route path="/" element={<h2>Welcome to StarDB</h2>} />
        {/* <Route path="/planets" element={<RandomPlanet/>} /> */}
        <Route path="/people" element={ <ItemList/>} />
        <Route path="/details" element={ <PersonDetails /> } />
      </Routes>
      {/* <div className="row mb2">
        <div className="col-md-6">
          <ItemList/> 
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div> */}
    </div>
  )
}

export default App;