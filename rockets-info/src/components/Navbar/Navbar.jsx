import React from "react";
import Settings from "../Settings/MainSettings";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="right-content">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="recentlaunches">Recent launches</Link>
          </li>
          <li>
            <Link to="missions">Missions</Link>
          </li>
        </ul>
      </div>
      <div className="left-content">
        <Settings />
      </div>
    </div>
  );
};

export default Navbar;
