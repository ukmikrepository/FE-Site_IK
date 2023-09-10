import React from "react";
import Button from "../../Atoms/Button";
import { RandomReveal } from "react-random-reveal";
import { isMobile } from "react-device-detect";

export default function Hero() {
  return (
    <>
      <section className="overflow-hidden h-screen">
        <div className="absolute -z-10 flex flex-col overflow-hidden">
          <img
            src="img/Hero_BG.webp"
            alt="Hero-background"
            className="h-screen object-cover "
          />
          {/* <span className="bg-[#540D37] w-full h-[180px]"></span> */}
        </div>
        {/* Rehat sejenak */}
        <div className="w-screen xs:pt-[380px] lg:pt-32 2xl:pt-56 pb-[60px]">
          <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:px-">
            <div className="md:mr-[100px] mr-[-500px] absolute border 2xl:mr-[-100px] lg:order-2 xs:absolute xs:right-14 xs:top-5 lg:static">
              {isMobile ? (
                <img
                  src="img/astro-flip.png"
                  alt="Astronout-ilustration"
                  className="-rotate-45 transform w-[250px] xs:w-[150px] sm:w-[150px] md:w-[250px] lg:w-[325px] 2xl:w-[550px] mt-10 2xl:mt-40 "
                />
              ) : (
                <img
                  src="img/Astrounaut.png"
                  alt="Astronout-ilustration"
                  className=" animate-bounce-up-down xs:w-[150px] sm:w-[150px] md:w-[250px] lg:w-[325px] 2xl:w-[550px] mt-10 2xl:mt-40 "
                />
              )}
            </div>
            <div className="flex flex-col gap-6 2xl:gap-8 white">
              <h1 className="font-mont font-extrabold xs:text-[40px] xs:leading-[55px]  lg:text-[60px] lg:leading-[64px] text-[#C6E7FF] drop-shadow-[0_8px_8px_rgba(109,124,255,1)]">
                <RandomReveal isPlaying duration={1} characters="Hello" />
              </h1>
              <h1 className="font-mont font-extrabold xs:text-[40px] xs:leading-[55px]  lg:text-[60px] lg:leading-[64px] text-[#C6E7FF] drop-shadow-[0_8px_8px_rgba(109,124,255,1)]">
                <RandomReveal isPlaying duration={3} characters="Welcome to" />
              </h1>
              <h1 className="font-mont font-extrabold xs:text-[40px] xs:leading-[55px]  lg:text-[60px] lg:leading-[64px] text-[#C6E7FF] drop-shadow-[0_8px_8px_rgba(109,124,255,1)]">
                <RandomReveal
                  isPlaying
                  duration={4}
                  revealEasing="easeOutQuad"
                  characters="IK Space"
                />
              </h1>
              <p className="font-poppins font-semibold xs:text-[12px] xs:leading-[16px]  lg:text-[16px] lg:leading-[24px] text-[#A8BBFF]">
                Do You Want to Know More About Us? <br /> Let's Surf Our
                Website! If You Interest And <br /> Would To Be A Part Of UKMIK,
                Don't Wait to Click Down Bellow
              </p>
              <Button
                color="bg-[#5C7DFF]"
                anotherClass="rounded-full w-fit border border-[#A8BBFF] drop-shadow-[0_8px_5px_rgba(1,0,55,1)] text-white xs:text-[12px] xs:py-1 xs:px-2 md:text-[16px] md:py-2 md:px-4"
              >
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
