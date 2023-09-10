import React, { useEffect, useState } from "react";
import Button from "../../Atoms/Button";
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpen = (e) => {
      setOpen(!open);
  }

  return (
    <div
      className={`flex group md:px-24 px-4 justify-between items-center z-40 w-screen fixed top-0 text-white py-4 ${
        scrolled ? "backdrop-blur-sm bg-[rgba(0,0,0,0.10)]" : "bg-transparent"
      }`}
    >
      <img src="img/logo_ukmik.png" alt="" className="w-[50px] h-[50px]" />
      <div className="relative">
      <Button anotherClass={`${open ? `hidden` : `block md:hidden`} transition-all transform duration-1000 ease-in-out`} eventHandler={handleOpen} color="bg-transparent"><GiHamburgerMenu /></Button>
      <Button anotherClass={`${open ? 'block md:hidden' : 'hidden'} transition-all transform duration-1000 ease-in-out`} eventHandler={handleOpen} color="bg-transparent"><AiOutlineClose /></Button>
      <ul className={`flex flex-col gap-2 md:gap-8 md:flex-row mt-6 md:mt-0 items-center backdrop-blur-sm ${!scrolled ? "bg-[rgba(0,0,0,0.10)]" : "bg-primary-1"} md:backdrop-blur-none md:bg-transparent md:static py-2 px-4 absolute w-max ${open ? "-right-4" : "-right-36"}  transition transition-all duration-500`}>
        <li>Home</li>
        <li>Profile</li>
        <li>Blog</li>
        <li>
          <Button color="bg-[#FFCB5C] rounded-full text-black font-black">
            Log In
          </Button>
        </li>
      </ul>
      </div>
    </div>
  );
}
