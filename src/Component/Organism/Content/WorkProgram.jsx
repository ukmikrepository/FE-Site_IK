import React from 'react'
import { CardSimple } from '../../Molecules/CardSimple'

export default function WorkProgram() {
  return (
    <>
      <div className="w-full relative border border-yellow-500">
        <img src="img/OurProgram_BG.png" alt="" className="bo w-screen h-screen absolute -z-50"/>

        <div className="container mx-auto mt-16 border border-red-500">
          <div className="w-max mx-auto text-center border border-gray-800">
            <h1 className="font-mont font-semibold text-primary-4 text-[52px] leading-[62px] drop-shadow-[0_2px_2px_rgba(8,4,174,1)]">Our Work Program</h1>
            <p className="font-poppins text-[30px] leading-[45px]">February 2023</p>
          </div>
        </div>

        <div>
          <CardSimple>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus accusamus nobis officia rerum. Perferendis esse quo officia explicabo dolore perspiciatis, recusandae eum neque, maiores, ipsum impedit! Eum, omnis excepturi! Sequi.
          </CardSimple>
        </div>
      </div>
    </>
  )
}
