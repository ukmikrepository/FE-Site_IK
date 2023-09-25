import React from "react";
import { RandomReveal } from "react-random-reveal";

export default function EventHead() {
  return (
    <div className="flex flex-col gap-4 justify-between container">
      <div className="">
        <h1 className="font-extrabold text-[35px] leading-10 text-primary-1 drop-shadow-[0_4px_4px_rgba(85,183,255,1)]">
          POPULAR <br /> EVENT
        </h1>
        <h2 className="text-3xl font-extrabold">UKM IK</h2>
      </div>
      <div className="w-full">
        <p className="text-grey-2 text-sm leading-[22px] text-justify indent-10">
          Unit Kegiatan Mahasiswa Informatika dan Komputer merupakan organisasi yang bertujuan untuk
          ikut berperan menggali, meningkatkan dan mengembangkan kreatifitas di
          bidang keilmuan, penalaran ilmiah dan melaksanakan kegiatan sosial di
          masyarakat.
        </p>
        <div className="flex text-4xl mt-4 gap-6">
          <div className="flex flex-col">
            <span className="font-extrabold">
            <RandomReveal isPlaying duration={3} characters="1000" characterSet={[1,2,3,4,5,6,7,8,9,0]} className="character:text-[35px] leading-10"/><span className="text-primary-1 ">+</span>
            </span>
            <span className="text-grey-3 text-xl">ALUMNUS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold">
            <RandomReveal isPlaying duration={3} characters="137" characterSet={[1,2,3,4,5,6,7,8,9,0]} /><span className="text-primary-1">+</span>
            </span>
            <span className="text-grey-3 text-xl">ANGGOTA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
