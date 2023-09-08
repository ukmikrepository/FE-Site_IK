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

        <div className="container">
          <CardSimple className=" gap-4">
            <div className="flex flex-col gap-3 bororange-600 ">
              <div className="flex flex-row justify-between borr-red-800">
                <div className="flex flex-row gap-4">
                    <div className="w-14 rounded-full bg-primary-4"></div>
                    <div className="flex flex-col gap-2 ">
                      <h2 className="font-poppins text-xl leading-[30px] text-grey-1">Latihan Kader 3</h2>
                      <p className="font-poppins font-light text-xs leading-[18px]">Divisi Keanggotaan</p>
                    </div>
                </div>
                <img src="img/Options_1.png" alt="" className="h-max pt-[1px]"/>
              </div>
              <span className="border border-grey-10 w-full"></span>
            </div>


            <div className="w-[312px]">
              <p className="font-poppins font-light text-[10px] leading-[15px]">Latihan Kader adalah acara yang diselenggarakan sebagai salah satu syarat calon anggota agar bisa dilantik menjadi anggota</p>
            </div>

            <div className="flex flex-row justify-between mt-4">
              <div>
              {/* <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" /> */}
              </div>
              <p className="font-poppins font-semibold text-[14px] text-grey-1 leading-[21px]">Due to : <span className="font-light">22 February 2024</span></p>
            </div>
          </CardSimple>
        </div>
      </div>
    </>
  )
}
