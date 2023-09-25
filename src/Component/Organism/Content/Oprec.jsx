import React from "react";
import { isMobile } from "react-device-detect";
import OprecMobile from "./Mobile/OprecMobile";

export default function Oprec() {
  return (
    <div className="w-full bg-primary-9 py-12 ">
      <div className="">
            {isMobile ? (
              <OprecMobile/>
            ) : (
              <div>

              </div>
            )}
          </div>
      
    </div>
  );
}
