import React from 'react'

export default function Hero() {
  return (
    <>
      <section className="">
        
        <div>
          <img src='img/Hero_BG.webp' alt='Hero-background' className='h-max '/>
          <span className='w-max h-[329px] bg-[#540D37]'></span>
        </div>
        
        <div className='container absolute left-0 top-3 mxaut border border-black'>
          <div className='flex flex-row border border-white '>
            <h1 className='w-[745px] border border-black font-bold text-[50px] text-[#C6E7FF]'>Hello Welcome to IK Space</h1>
            <img src='img/Astrounaut.png' alt='Astronout-ilustration' className='w-[353px] border border-red-600'/>
          </div>
        </div>

      </section> 
    </>
  )
}
