import React from "react";
import Navbar from "../../components/Navbar";
import rocketImage from "../../assets/for_press_release.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-content">
        <div className="home-title">
          <h1 className="title">SpaceX Launche And Missions In Details</h1>
          <p className="description">
            Here we will show the launches and missions of the space rockets
            that were manufactured by the global company SpaceX in detail, To
            browse, go to the head.
          </p>
        </div>
        <div className="image">
          <img src={rocketImage} alt="rocketImage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
