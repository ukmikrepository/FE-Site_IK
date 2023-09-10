import React from "react";
import CardSimple from "../../Molecules/CardSimple";

export default function Experience() {
  return (
    <div>
      <div className="w-full">
        <div className="container mx-auto flex justify-around">

          {/* Section Kiri */}
          <div className="flex flex-col gap-5">
            <h1 className="font-extrabold text-5xl leading-[64px] text-primary-4 drop-shadow-[0_4px_3px_rgba(85,183,255,1)]">
              Why you <br />
              should <br />
              construct <br />
              your <br />
              experience <br />
              with us
            </h1>
            <img
              src="/img/logo_ukmik.png"
              className="h-[75px] w-[75px]"
              alt=""
            />
          </div>

          {/* Section Kanan */}
          <div className="flex gap-4">
              {/* Card Kiri */}
              
              

              <div className="flex items-center">
                <CardSimple className="w-[250px] bg-primary-5 gap-4 drop-shadow-[-4px_-4px_4px_rgba(85,183,255,1)]">
                  <img src="/img/studyclub.png" className="w-[100px]" alt="" />
                  <h1 className="text-white text-md w-3/4">Bergabunglah dengan UKM IK untuk meraih prestasi, ikuti lomba dan event, serta berbagi pengetahuan dengan banyak anggota berpengalaman.</h1>
                  <span className="font-thin text-grey-9 italic">Event & Lomba</span>
                </CardSimple>
              </div>
              {/* Card Kanan */}
              <div className="flex flex-col items-center justify-between gap-4">
                <CardSimple className="w-[250px] bg-[#8E1AE0] gap-4 drop-shadow-[4px_4px_4px_#5E147C]">
                  <img src="/img/ikdev.png" className="w-[100px]" alt="" />
                  <h1 className="text-white text-md w-3/4">Terjun langsung ke tim IK-Dev untuk belajar melalui pengalaman nyata dalam studi kasus yang inspiratif.</h1>
                  <span className="font-thin text-grey-9 italic">IK Dev</span>
                </CardSimple>
                <CardSimple className="w-[250px] bg-primary-3 gap-4 drop-shadow-[4px_4px_4px_#14008E]">
                  <img src="/img/santai.png" className="w-[100px]" alt="" />
                  <h1 className="text-white text-md w-3/4">Di UKM IK, kami tidak hanya belajar, tetapi juga merayakan kesenangan bersama, seperti camping dan berolahraga bersama.</h1>
                  <span className="font-thin text-grey-9 italic">Refreshing</span>
                </CardSimple>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
