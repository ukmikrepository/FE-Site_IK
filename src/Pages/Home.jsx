import React from "react";
import Hero from "../Component/Organism/Content/Hero";
import Oprec from "../Component/Organism/Content/Oprec";
import Event from "../Component/Organism/Content/Event";
import WorkProgram from "../Component/Organism/Content/WorkProgram";
import Experience from "../Component/Organism/Content/Experience";
import Contact from "../Component/Organism/Content/Contact";
import Standard from "../Component/Layout/Standard";

export default function Home() {
  return (
    <>
      <Standard>
        <Hero />
        {/* <Oprec />
        <Event />
        <WorkProgram />
        <Experience />
        <Contact /> */}
      </Standard>
    </>
  );
}
