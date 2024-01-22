//import { useState } from 'react'
import React from "react";
//import './App.css'
import { Routes, Route } from "react-router-dom";
import Players from "./features/Players";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./features/Navbar";
import About from "./features/About";
import PlayerForm from "./features/PlayerForm"
import FindPlayer from "./features/FindPlayer";
import Player from "./features/Player";





function App() {
  return (
    <div>
      <div className="App">
        <h1>Welcome to the Puppy Bowl</h1>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/findPlayer/3.1" element={<FindPlayer />} />
          <Route path="/playerForm/3.2" element={<PlayerForm />} />
          <Route path="/" element={<Players />} />
          <Route path="/player/:id" element={<Player />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
