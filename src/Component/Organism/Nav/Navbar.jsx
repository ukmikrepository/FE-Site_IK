import React, { useEffect, useState } from "react";
import Button from "../../Atoms/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

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
  };

  return (
    <div
      className={`flex group md:px-24 px-4 justify-between items-center z-40 w-screen fixed top-0 text-white py-4 ${
        scrolled ? "backdrop-blur-sm bg-[rgba(0,0,0,0.10)]" : "bg-transparent"
      }`}
    >
      <img src="img/logo_ukmik.png" alt="" className="w-[50px] h-[50px]" />
      <div className="relative">
        <Button
          anotherClass={`transition-all block md:hidden transform duration-1000 ease-in-out`}
          eventHandler={handleOpen}
          color="bg-transparent"
        >
          <GiHamburgerMenu />
        </Button>
        <ul
          className={`
  flex flex-col md:gap-8 gap-4 py-12 md:py-0 w-screen h-screen md:w-max md:h-fit md:gap-8 md:flex-row mt-6 md:mt-0 items-center
  backdrop-blur-sm ${
    !scrolled ? "backdrop-blur-md bg-[rgba(0,0,0,0.10)]" : "bg-primary-1"
  }
  md:backdrop-blur-none md:bg-transparent md:static absolute
  ${open ? "-right-4 -top-12" : "-top-12 -right-[106vw]"}
  transition transition-all duration-500
`}
        >
          <Button
            anotherClass={`transition-all block md:hidden transform duration-1000 ease-in-out absolute right-4 font-bold text-3xl top-12`}
            eventHandler={handleOpen}
            color="bg-transparent"
          >
            <AiOutlineCloseCircle />
          </Button>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) => {
                return isPending
                  ? ""
                  : isActive
                  ? "font-extrabold font-mont"
                  : "hover:text-primary-2 outline-none";
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive, isPending }) => {
                return isPending
                  ? ""
                  : isActive
                  ? "font-extrabold font-mont"
                  : "hover:text-primary-2 outline-none";
              }}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Blog"
              className={({ isActive, isPending }) => {
                return isPending
                  ? ""
                  : isActive
                  ? "font-extrabold font-mont"
                  : "hover:text-primary-2 outline-none";
              }}
            >
              Blog
            </NavLink>
          </li>
          <li className=" mt-4 md:mt-0">
            <Button color="bg-[#FFCB5C] rounded-full text-black font-black">
              <NavLink
                to="/login"
                className={({ isActive, isPending }) => {
                  return isPending
                    ? ""
                    : isActive
                    ? "font-bold text-primary-2"
                    : "hover:text-white outline-none";
                }}
              >
                Login
              </NavLink>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
