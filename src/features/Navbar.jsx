import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <SearchBar />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Players/">New Player</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;