import React from "react";
import Settings from "../Settings";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="right-content">
        <ul>
          <li>Recent launches</li>
          <li>Missions</li>
        </ul>
      </div>
      <div className="left-content">
        <Settings />
      </div>
    </div>
  );
};

export default Navbar;
