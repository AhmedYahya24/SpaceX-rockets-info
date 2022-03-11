import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <div>
        <Navbar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
