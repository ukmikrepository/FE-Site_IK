import React from "react";

export default function EventHead() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="font-extrabold text-6xl text-primary-1 drop-shadow-[0_4px_4px_rgba(85,183,255,1)]">
          POPULAR <br /> EVENT
        </h1>
        <h2 className="text-3xl font-extrabold">UKM IK</h2>
      </div>
      <div className="w-3/5">
        <p className="text-grey-5">
          UKM Informatika dan Komputer merupakan organisasi yang bertujuan untuk
          ikut berperan menggali, meningkatkan dan mengembangkan kreatifitas di
          bidang keilmuan, penalaran ilmiah dan melaksanakan kegiatan sosial di
          masyarakat.
        </p>
        <div className="flex text-4xl mt-4 gap-6">
          <div className="flex flex-col">
            <span className="font-extrabold">
              1000<span className="text-primary-1">+</span>
            </span>
            <span className="text-grey-4 text-xl">ALUMNUS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold">
              137<span className="text-primary-1">+</span>
            </span>
            <span className="text-grey-4 text-xl">ANGGOTA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
