import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import FormOprec from "../Component/Organism/Content/FormOprec";
import CardSimple from "../Component/Molecules/CardSimple";
import { Link } from "react-router-dom";
import Button from "../Component/Atoms/Button";
import { BiLogoWhatsapp } from "react-icons/bi";

export default function Oprec() {
  const [done, setDone] = useState(localStorage.getItem("isFormFilled"));

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] py-8">
      <div className="pl-7 md:pl-14">
        <Link to="/">
          <img
            src="img/logo_ukmik.png"
            alt=""
            className="w-[60px] md:w-[80px] h-[60px] md:h-[80px]"
          />
        </Link>
      </div>
      {done !== "true" ? (
        <FormOprec />
      ) : (
        <div className="container w-full md:w-2/3 mx-auto mt-8">
          <div className="text-center">
            <h3 className="font-poppins font-semibold text-xl leading-[30px] md:text-[40px] md:leading-[60px] text-primary-4 ">
              Formulir Pendaftaran
            </h3>
            <h1 className="font-mont font-extrabold text-[30px] leading-[36px] md:text-[60px] md:leading-[73px] text-primary-6 drop-shadow-[0px_8px_4px_rgba(221,224,225,1)]">
              UKM IK
            </h1>
            <p className="font-poppins text-sm md:text-xl leading-[18px] md:leading-[30px] text-grey-4">
              Periode 2023/2024
            </p>
          </div>
          <CardSimple className="shadow-lg mt-8 bg-white flex flex-col justify-center items-center text-center">
            <h1 className="font-mont font-bold text-2xl  drop-shadow-[0px_8px_4px_rgba(221,224,225,1)] mt-12 ">
              Terimakasih Telah Mendaftar!!
            </h1>
            <span className="text-[9px] mt-2">
              Jangan lupa bergabung ke{" "}
              <b>group WhatsApp Calon Anggota UKM IK</b>
            </span>
            <img src="/img/oprec/done.jpg" className="w-[350px]" alt="" />
            <div className="flex gap-4 mt-4">
          <Button
            color="bg-black"
            anotherClass="group flex items-center text-sm gap-2 text-white rounded-full shadow-lg transition-all ease-in-out duration-500 hover:shadow-2xl hover:bg-gradient-to-l from-gray-800 via-gray-700 to-gray-600 hover:animate-bounce"
          >
           <Link to="/">
           Kembali ke Homepage
           </Link>
          </Button>

        <Button
          color="bg-primary-1"
          anotherClass="text-white text-sm rounded-full shadow-lg transition-all ease-in-out duration-500 hover:shadow-2xl hover:bg-gradient-to-l from-green-400 via-teal-500 to-cyan-600 hover:animate-bounce"
        >
          <Link to="https://chat.whatsapp.com/C5VchQtXiOv2gdWfIp93T6"  target="_blank" className="flex items-center gap-2"> <BiLogoWhatsapp /> <span>Join Group WA</span></Link>
        </Button>
      </div>
          </CardSimple>
        </div>
      )}
    </div>
  );
}
