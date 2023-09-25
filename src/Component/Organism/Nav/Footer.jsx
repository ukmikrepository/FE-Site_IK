import React from "react";
import { HiMail, HiPhone } from "react-icons/hi";
import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import Button from "../../Atoms/Button";

export default function Footer() {
  return (
    <div className="w-full bg-primary-4 py-6 flex flex-col gap-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-4 ">
        <div className="flex flex-col md:flex-row md:w-1/2 gap-4  items-center">
          <img src="/img/logo_ukmik.png" alt="" className="w-[30px] md:w-[80px] md:h-[80px]  p-1 mx-auto md:mx-0"/>
          <p className="font-poppins text-[11px] md:text-[12px] text-grey-9 text-justify indent-8 md:indent-6">
            UKM Informatika dan Komputer merupakan organisasi yang bertujuan
            untuk ikut berperan menggali, meningkatkan dan mengembangkan
            kreatifitas di bidang keilmuan, penalaran ilmiah dan
            melaksanakan kegiatan sosial di masyarakat.</p>
        </div>

        <div className="flex flex-row  md:justify-arround justify-between  md:gap-16 ">
          <div className="flex flex-col gap-2">
            <h6 className="font-bold text-[11px] md:text-[12px] text-grey-9">Pages</h6>
            <div className="flex flex-row justify-between gap-6">
              <ul className="flex flex-col gap-1 text-[9px] md:text-[12px] text-grey-9">
                <li>Home</li>
                <li>Profile</li>
                <li>Blog</li>
              </ul>
              <ul className=" flex-col gap-1 text-[9px] md:text-[12px] text-grey-9 hidden">
                <li>Home</li>
                <li>Profile</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row md:flex-col gap-4 md:gap-4">
            <div className="flex flex-col gap-2 ">
              <h6 className="font-bold text-[11px] md:text-[12px] text-grey-9">Contact Us</h6>
              <div className="flex flex-col gap-1 ">
                <span className="flex items-center gap-1 text-[9px] md:text-[12px] font-thin text-grey-9">
                  <HiMail className="text-[11px] w-[15px] h-[15px]"/>
                  <a href="mailto:ukmik@utdi.ac.id">ukmik@utdi.ac.id</a>
                </span>
                <span className="flex items-center gap-1 text-[9px] md:text-[12px] font-thin text-grey-9">
                  <HiPhone className="text-[11px] w-[15px] h-[15px]"/>
                  <a href="https://wa.me/6282171392206" target="_blank" rel="noopener noreferrer">
                    082171392206
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-fit text-black gap-1 md:gap-2 justify-end">
              <Button anotherClass="rounded-lg px-1 py-1">
                <BiLogoFacebook className="w-[15px] text-grey-9"/>
              </Button>
              <Button anotherClass="rounded-lg px-1 py-1">
                <BiLogoInstagram className="w-[15px] text-grey-9"/>
              </Button>
              <Button anotherClass="rounded-lg px-1 py-1">
                <BiLogoYoutube className="w-[15px] text-grey-9"/>
              </Button>
            </div>
          </div>

        </div>
      </div>

      <div className="flex flex-col gap-2 container mx-auto">
      <span className="border-b border-grey-9"></span>
        <small className="text-[10px] md:text-[12px] text-grey-9">
          © 2022 ukmik All rights reserved
        </small>
      </div>
    </div>
  );
}
