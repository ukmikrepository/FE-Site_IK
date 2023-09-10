import React from "react";
import Button from "../Atoms/Button";
import { BsWhatsapp } from "react-icons/bs";

export default function OprecHead() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-5xl font-mont font-extrabold text-white drop-shadow-[0_4px_3px_rgba(85,183,255,1)]">
        OPEN <br /> RECRUITMENT
      </h1>
      <h6 className="font-mont font-extrabold text-primary-4 drop-shadow-[0_4px_3px_rgba(85,183,255,1)]">
        11 - 18 September 2023
      </h6>
      <p className="mt-4 w-3/4">
        Yuk, jadi bagian dari UKMIK! <br /> Pendaftaran anggota kami sudah
        dibuka. Daftar sekarang dengan satu klik tombol di bawah ini! 🚀😎
      </p>
      <div className="flex gap-4 mt-4">
        <a
          href="https://api.whatsapp.com/send?phone=6282171392206&text=Halo%20kak%3F%20Mau%20nanya%20perihal%20Oprec%20UKM%20IK%20dong!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            color="bg-black"
            anotherClass="group flex items-center gap-2 text-white rounded-full shadow-lg transition-all ease-in-out duration-500 hover:shadow-2xl hover:bg-gradient-to-l from-gray-800 via-gray-700 to-gray-600 hover:animate-bounce"
          >
            <BsWhatsapp className="w-0 transition-width duration-1000 group-hover:w-fit" />
            Contact Person
          </Button>
        </a>

        <Button
          color="bg-primary-1"
          anotherClass="text-white rounded-full shadow-lg transition-all ease-in-out duration-500 hover:shadow-2xl hover:bg-gradient-to-l from-green-400 via-teal-500 to-cyan-600 hover:animate-bounce"
        >
          Daftar Sekarang
        </Button>
      </div>
    </div>
  );
}
