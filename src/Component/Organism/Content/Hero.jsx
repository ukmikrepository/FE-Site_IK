import React from 'react'
// import Button from '../../Atoms/Button'

export default function Hero() {
  return (
    <>
      <section className="overflow-hidden">
        <div className="absolute -z-10 flex flex-col overflow-hidden">
          <img src="img/Hero_BG.webp" alt="Hero-background" className="h-screen object-cover "/>
          {/* <span className="bg-[#540D37] w-full h-[180px]"></span> */}
        </div>

        <div className="w-screen pt-28 2xl:pt-36 border border-white pb-[60px]">
          <div className="container mx-auto flex flex-row justify-between gap-4">
                <div className=" 2xl:ml-[-100px] flex flex-col gap-6 2xl:gap-8">
                  <h1 className="font-mont font-extrabold text-[74px] text-[#C6E7FF] drop-shadow-[0_8px_8px_rgba(109,124,255,1)] leading-[90px]">Hello <br /> Welcome to <br /> IK Space</h1>
                  <p className="font-poppins font-semibold text-[20px] text-[#C6E7FF]">Do You Want to Know More About Us? <br /> Let's Surf Our Website! If You Interest And <br /> Would To Be A Part Of UKMIK, Don't Wait to Click Down Bellow</p>
                  {/* <Button/> */}
                </div>
                <div className=" mr-[25px] 2xl:mr-[-100px]">
                  <img src="img/Astrounaut.png" alt="Astronout-ilustration" className="w-[350px] 2xl:w-[550px] mt-20 2xl:mt-40 animate-bounce" />
                </div>
          </div>
        </div>
      </section> 
    </>
  )
}
