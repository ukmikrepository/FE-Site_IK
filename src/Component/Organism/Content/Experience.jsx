import React from "react";
import CardSimple from "../../Molecules/CardSimple";

export default function Experience() {
  return (
    <div>
      <div className="w-full ">
        <div className="container mx-auto flex flex-col gap-16 md:gap-0 md:flex-row justify-around items-center ">
          {/* Section Kiri */}
          <div className="flex flex-col gap-0 md:gap-5 md:w-[264px] text-center md:text-left">
            <h1 className="font-extrabold text-2xl md:text-5xl md:leading-[64px] text-primary-4 drop-shadow-[0_4px_3px_rgba(85,183,255,1)] w-[560px] md:w-full">Why you should construct your experience with us <span className="inline md:hidden">UKM IK</span></h1>
              <img
                src="/img/logo_ukmik.png"
                className="h-[75px] w-[75px] hidden md:block"
                alt=""
              />
          </div>


          {/* Section Kanan */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-4">
            {/* Card Kiri */}
            <div className="flex items-center px-5 md:px-0">
                <CardSimple className="w-full md:w-[250px] bg-primary-5 gap-4 drop-shadow-[4px_4px_4px_rgba(85,183,255,1)] md:drop-shadow-[-4px_-4px_4px_rgba(85,183,255,1)] p-4">
                  <div className="border border-primary-9 rounded-md px-4 py-6 flex flex-col gap-6 md:border-none">
                    <div className="flex flex-row md:flex-col gap-6">
                      <img src="/img/studyclub.png" className="w-[100px] order-2" alt="" />
                      <h1 className="text-white text-md md:text-sm w-3/4 md:w-full">Bergabunglah dengan UKM IK untuk meraih prestasi, ikuti lomba dan event, serta berbagi pengetahuan dengan banyak anggota berpengalaman.</h1>
                    </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-2 md:hidden">
                      <span className="w-[10px] h-[10px] bg-primary-9 rounded-full"></span>
                      <span className="w-[10px] h-[10px] bg-primary-9 rounded-full"></span>
                      <span className="w-[10px] h-[10px] bg-primary-9 rounded-full"></span>
                    </div>
                    <span className="font-thin text-white italic mr-4">~ Event & Lomba</span>
                  </div>
                  </div>
                </CardSimple>
            </div>
            
            {/* Card Kanan */}
            <div className="flex flex-col items-center justify-between gap-8 md:gap-4 px-5 md:px-0">
              <CardSimple className="w-full md:w-[250px]  bg-[#8E1AE0] gap-4 drop-shadow-[4px_4px_4px_rgba(94,20,124,0.8)] p-4">
                <div className="border border-primary-9 rounded-md px-4 py-6 flex flex-col gap-6 md:border-none">
                  <div className="flex flex-row md:flex-col gap-6">
                    <img src="/img/ikdev.png" className="w-[100px]" alt="" />
                    <h1 className="text-white text-md md:text-sm w-3/4 md:w-full">Bergabunglah dengan UKM IK untuk meraih prestasi, ikuti lomba dan event, serta berbagi pengetahuan dengan banyak anggota berpengalaman.</h1>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-2 md:hidden">
                      <span className="w-[10px] h-[10px] bg-primary-9 rounded-full"></span>
                      <span className="w-[10px] h-[10px] bg-primary-9 rounded-full"></span>
                      <span className="w-[10px] h-[10px] bg-primary-9 rounded-full"></span>
                    </div>
                    <span className="font-thin text-white italic mr-4">~ IK Dev</span>
                  </div>
                </div>
              </CardSimple>
              <CardSimple className="w-full md:w-[250px]  bg-primary-3 gap-4 drop-shadow-[4px_4px_4px_#056BB7] p-4">
                <div className="border border-primary-9 rounded-md px-4 py-6 flex flex-col gap-6 md:border-none">
                  <div className="flex flex-row md:flex-col gap-6">
                    <img src="/img/santai.png" className="w-[100px] order-2" alt="" />
                    <h1 className="text-white text-md md:text-sm w-3/4 md:w-full">Bergabunglah dengan UKM IK untuk meraih prestasi, ikuti lomba dan event, serta berbagi pengetahuan dengan banyak anggota berpengalaman.</h1>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-row gap-2 md:hidden">
                      <span className="w-[10px] h-[10px] bg-primary-9 rounded-full"></span>
                      <span className="w-[10px] h-[10px] bg-primary-9 rounded-full"></span>
                      <span className="w-[10px] h-[10px] bg-primary-9 rounded-full"></span>
                    </div>
                    <span className="font-thin text-white italic mr-4">~ Refreshing</span>
                  </div>
                </div>
              </CardSimple>
            </div>

          </div>





        </div>
      </div>
    </div>
  );
}
