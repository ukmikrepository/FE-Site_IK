import React from 'react';
// import Navbar from './Component/Organism/Nav/Navbar'
// import Footer from './Component/Organism/Nav/Footer'
import Standard from './Component/Layout/Standard';
import Hero from './Component/Organism/Content/Hero';
import Event from './Component/Organism/Content/Event';
import WorkProgram from './Component/Organism/Content/WorkProgram';
import Experience from './Component/Organism/Content/Experience';
import Contact from './Component/Organism/Content/Contact';
import Oprec from './Component/Organism/Content/Oprec';

function App({user}) {
  return (
    <>
    <Standard>
      <Hero/>
      <Oprec />
      <Event/>
      <WorkProgram/>
      <Experience/>
      <Contact/>
    </Standard>
    </>
  );
}

export default App;
