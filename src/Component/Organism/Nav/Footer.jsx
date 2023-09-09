import React from "react";
import { HiMail, HiPhone } from "react-icons/hi";
import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
import Button from "../../Atoms/Button";

export default function Footer() {
  return (
    <div className="w-full bg-primary-4">
      <div className="container text-white mx-auto flex w-full justify-between mt-4 bg-primary-4 py-4">
        <div className="w-2/5 font-poppins">
          <div className="flex flex-col justify-between gap-8">
            <div className="">
              <img
                src="/img/logo_ukmik.png"
                className="w-[35px] h-auto"
                alt=""
              />
              <p className="text-[10px] mt-3">
                UKM Informatika dan Komputer merupakan organisasi yang bertujuan
                untuk ikut berperan menggali, meningkatkan dan mengembangkan
                kreatifitas di bidang keilmuan, penalaran ilmiah dan
                melaksanakan kegiatan sosial di masyarakat.
              </p>
            </div>
            <small className="text-[9px] text-grey-9">
              © 2022 ukmik All rights reserved
            </small>
          </div>
        </div>
        <div className="flex gap-24 items-center">
          <div className="flex flex-col gap-8 justify-between">
            <div className="flex gap-24">
              <ul className={`flex flex-col gap-1 text-[11px] justify-center`}>
                <li>Home</li>
                <li>Profile</li>
                <li>Blog</li>
              </ul>
              <div className="flex flex-col justify-center gap-1">
                <h6 className="font-bold text-[11px]">Contact Us</h6>
                <span className="flex items-center gap-1 text-[9px] font-thin text-grey-9">
                  <HiMail className="text-sm" />
                  <a href="mailto:ukmik@utdi.ac.id">ukmik@utdi.ac.id</a>
                </span>
                <span className="flex items-center gap-1 text-[9px] font-thin text-grey-9">
                  <HiPhone className="text-sm" />
                  <a target="_blank" href="https://wa.me/6282171392206">
                    082171392206
                  </a>
                </span>
              </div>
            </div>
            <div className="flex text-black gap-2 justify-end">
              <Button anotherClass="rounded-full px-2">
                <BiLogoFacebook />
              </Button>
              <Button anotherClass="rounded-full px-2">
                <BiLogoInstagram />
              </Button>
              <Button anotherClass="rounded-full px-2">
                <BiLogoYoutube />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
