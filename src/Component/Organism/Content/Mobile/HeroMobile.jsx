import React, { useRef } from "react";
import Button from "../../../Atoms/Button";
import { RandomReveal } from "react-random-reveal";

export default function HeroMobile() {
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
        setTimeout(() => {
            astroRef.current.classList.add("-rotate-45");
            astroRef.current.classList.remove("-right-60");
            astroRef.current.classList.add("-right-36");
        }, 2000);
    };

  return (
    <div>
        <img
            src="img/astro-flip.png"
            alt="Astronout-ilustration"
            ref={astroRef}
            onClick={astroClick}
            className="duration-500 transform absolute -right-60 top-36 h-fit w-[300px]"
        />
        <div className="flex flex-col gap-4 h-screen justify-end border pb-8">
            <div>
                <h1 className="font-mont font-extrabold  text-[35px] leading-10 text-[#C6E7FF] drop-shadow-[0_8px_8px_rgba(109,124,255,1)]">
                    <RandomReveal isPlaying duration={1} characters="Hello" />
                </h1>
                <h1 className="font-mont font-extrabold  text-[35px] leading-10 text-[#C6E7FF] drop-shadow-[0_8px_8px_rgba(109,124,255,1)]">
                    <RandomReveal isPlaying duration={3} characters="Welcome to" />
                </h1>
                <h1 className="font-mont font-extrabold  text-[35px] leading-10 text-[#C6E7FF] drop-shadow-[0_8px_8px_rgba(109,124,255,1)]">
                    <RandomReveal isPlaying duration={4} revealEasing="easeOutQuad" characters="IK Space"/>
                </h1>
            </div>
            <p className="font-poppins font-semibold text-[14px] leading-[18px] text-[#C6E7FF]">
                Do You Want to Know More About Us? <br /> Let's Surf Our
                Website! If You Interest And Would To Be A Part Of UKMIK,
                Don't Wait to Click Down Bellow
            </p>
            <Button
                color="bg-[#5C7DFF]"
                eventHandler={() => {
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                }}
                anotherClass="rounded-full w-fit border border-[#A8BBFF] drop-shadow-[0_8px_5px_rgba(1,0,55,1)] text-[#C6E7FF] hover:bg-[#4f71f7]"
            >
                Join Us
            </Button>
        </div>
    </div>
  )
}
