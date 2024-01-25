//import { useState } from 'react'
import React from "react";
//import './App.css'
import { Routes, Route } from "react-router-dom";
import Players from "./features/Players";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./features/Navbar";
import About from "./features/About";
import NewPlayer from "./features/NewPlayer"
import Player from "./features/Player";
import NewPlayerForm from "./features/NewPlayer"





function App() {
  return (
    <div>
      <div className="App">
        <h1>Welcome to the Puppy Bowl</h1>
        <Navbar />
        <Routes>
        <Route path="/" element={<Players />} />
          <Route path="/about" element={<About />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="/players/" element={<NewPlayerForm />} />{" "}
        </Routes>
      </div>
    </div>
  );
}

export default App;
