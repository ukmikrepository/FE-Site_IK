import React from "react";
import Button from "../Component/Atoms/Button";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-8">
      <div className="relative h-screen w-screen">
        <img
          src="/img/pattern-ik.png"
          className="w-screen h-screen opacity-50 absolute object-cover"
          alt=""
        />
        <div
          id="main"
          className="absolute inset-0 flex flex-col gap-2 items-center justify-center p-4
            sm:p-8" // Responsif pada tampilan mobile (dengan ukuran layar lebih kecil)
        >
          <div
            className="bg-white bg-opacity-50 backdrop-blur-sm backdrop-filter rounded-xl
              flex flex-col gap-2 items-center justify-center p-8 shadow-lg"
          >
            <img src="/img/logo_ukmik.png" className="w-[150px]" alt="" />
            <h1 className="text-3xl sm:text-4xl font-bold text-center">
              Under Construction
            </h1>
            <p className="mt-2 text-center">We are working on something amazing!</p>
            <Button
            color="bg-black"
            anotherClass="mt-4 flex text-sm items-center gap-2 text-white rounded-full shadow-lg transition-all ease-in-out duration-500 hover:shadow-2xl hover:bg-gradient-to-l from-gray-800 via-gray-700 to-gray-600 hover:animate-bounce"
          >
            <Link to="/">Back to Homepage</Link>
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
