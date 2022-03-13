import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecentLaunches from "./pages/RecentLaunches";
import Missions from "./pages/Missions";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="recentlaunches" element={<RecentLaunches />} />
            <Route path="missions" element={<Missions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
