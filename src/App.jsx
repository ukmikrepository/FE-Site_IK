import React from "react";
import { Routes, Route } from "react-router-dom";

// import Navbar from './Component/Organism/Nav/Navbar'
// import Footer from './Component/Organism/Nav/Footer'
import Home from "./Pages/Home";
// import Standard from "./Component/Layout/Standard";
import Oprec from "./Pages/Oprec";
import UnderConstruction from "./Pages/UnderConstruction";
import Profile from "./Pages/Profile";

function App({ user }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruitment" element={<Oprec />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blog" element={<UnderConstruction />} />
        <Route path="/login" element={<UnderConstruction />} />
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </>
  );
}

export default App;
