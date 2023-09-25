import React from "react";
import { isMobile } from "react-device-detect";
import HeroMobile from "./Mobile/HeroMobile"

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

          <div className="container mx-auto">
            {isMobile ? (
              <HeroMobile/>
            ) : (
              <div>

              </div>
            )}
          </div>
      </section>
    </>
  );
}
