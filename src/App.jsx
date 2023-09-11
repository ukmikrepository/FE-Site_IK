import React from "react";
import { Routes, Route } from "react-router-dom";

// import Navbar from './Component/Organism/Nav/Navbar'
// import Footer from './Component/Organism/Nav/Footer'
import Home from "./Pages/Home";
// import Standard from "./Component/Layout/Standard";
import Oprec from "./Pages/Oprec";

function App({ user }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recruitment" element={<Oprec />} />
      </Routes>
    </>
  );
}

export default App;
