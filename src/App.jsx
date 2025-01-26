import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WhoWeAre from "./components/WhoWeAre";
import Donate from "./components/Donate";
import ImmigrationLawyers from "./components/ImmigrationLawyers";
import DownloadFlyer from "./components/DownloadFlyer";
import Volunteers from "./components/Volunteers";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen w-full p-6 space-y-20 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-600">
        <Home />
        <WhoWeAre />
        <ImmigrationLawyers />
        <Volunteers /> 
        <DownloadFlyer />
        <Donate />
      </div>
    </Router>
  );
};

export default App;
