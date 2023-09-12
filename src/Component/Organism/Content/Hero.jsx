import React, { useRef } from "react";
import Button from "../../Atoms/Button";
import { RandomReveal } from "react-random-reveal";
import { isMobile } from "react-device-detect";

export default function Hero() {
  const astroRef = useRef(null);

  setTimeout(() => {
    astroRef.current.classList.add("-rotate-45");
    astroRef.current.classList.remove("-right-60");
    astroRef.current.classList.add("-right-36");
  }, 1000);

  const astroClick = () => {
    astroRef.current.classList.remove("-rotate-45");
    astroRef.current.classList.add("-right-60");
    astroRef.current.classList.remove("-right-36");
  };
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
        <div className={`${!isMobile ? "container" : "pl-4"} w-full xs:pt-[380px] lg:pt-32 2xl:pt-56 pb-[60px] overflow-hidden`}>
          <div className="relative mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:px-4 overflow-hidden">
            {isMobile ? (
              <img
                src="img/astro-flip.png"
                alt="Astronout-ilustration"
                ref={astroRef}
                onClick={astroClick}
                className="duration-500 transform absolute -right-60 top-36 h-fit w-[300px]"
              />
            ) : (
              <div className="md:mr-[100px] mr-[-500px] absolute 2xl:mr-[-100px] lg:order-2 xs:absolute xs:right-14 xs:top-5 lg:static">
                <img
                  src="img/Astrounaut.png"
                  alt="Astronout-ilustration"
                  className=" animate-bounce-up-down xs:w-[150px] sm:w-[150px] md:w-[250px] lg:w-[325px] 2xl:w-[550px] mt-10 2xl:mt-40 "
                />
              </div>
            )}
            <div className="flex flex-col gap-4 h-screen pb-36 md:pb-0 md:h-fit md:justify-start justify-end gap-0 md:gap-6 2xl:gap-8 white">
              <h1 className="font-mont font-extrabold  text-[40px] leading-none lg:text-[60px] lg:leading-[64px] text-[#C6E7FF] drop-shadow-[0_8px_8px_rgba(109,124,255,1)]">
                <RandomReveal isPlaying duration={1} characters="Hello" />
              </h1>
              <h1 className="font-mont font-extrabold  text-[40px] leading-none lg:text-[60px] lg:leading-[64px] text-[#C6E7FF] drop-shadow-[0_8px_8px_rgba(109,124,255,1)]">
                <RandomReveal isPlaying duration={3} characters="Welcome to" />
              </h1>
              <h1 className="font-mont font-extrabold  text-[40px] leading-none lg:text-[60px] lg:leading-[64px] text-[#C6E7FF] drop-shadow-[0_8px_8px_rgba(109,124,255,1)]">
                <RandomReveal
                  isPlaying
                  duration={4}
                  revealEasing="easeOutQuad"
                  characters="IK Space"
                />
              </h1>
              <p className="font-poppins font-semibold text-[12px] xs:leading-[16px] my-6 md:my-0  lg:text-[16px] lg:leading-[24px] text-[#A8BBFF]">
                Do You Want to Know More About Us? <br /> Let's Surf Our
                Website! If You Interest And <br /> Would To Be A Part Of UKMIK,
                Don't Wait to Click Down Bellow
              </p>
              <Button
                color="bg-[#5C7DFF]"
                eventHandler={() => {
                  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                }}
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
