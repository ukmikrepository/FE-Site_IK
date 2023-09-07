import React from 'react'
import Hero from './Component/Organism/Content/Hero';
import Event from './Component/Organism/Content/Event';
import WorkProgram from './Component/Organism/Content/WorkProgram';
import Experience from './Component/Organism/Content/Experience';
import Contact from './Component/Organism/Content/Contact';

export default function Home() {
  return (
    <>
      <Hero/>
      <Event/>
      <WorkProgram/>
      <Experience/>
      <Contact/>
    </>
  )
}
