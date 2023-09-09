import React from 'react'
import { CardSimple } from '../../Molecules/CardSimple'

export default function WorkProgram() {
  return (
    <div className="w-full h-full relative">
      <img src="img/OurProgram_BG.png" alt="" className="2xl:h-screen w-full absolute -z-50"/>

      <div className="container mx-auto mt-16 2xl:mt-28">
        <div className="w-max mx-auto text-center">
          <h1 className="font-mont font-semibold text-primary-4 text-[52px] leading-[62px] drop-shadow-[0_2px_2px_rgba(8,4,174,1)]">Our Work <br className="xs:inline md:hidden"/> Program</h1>
          <p className="font-poppins text-[30px] leading-[45px]">February 2023</p>
        </div>
      </div>

      <div className="container mx-auto grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between mt-16 2xl:mt-28 gap-y-8 xl:gap-y-10 gap-x-8 xl:gap-x-10">
      {[
          {
            id: "workProgram1",
            circularMain: "",
            heading: "Latihan Kader 1",
            division: "Divisi Keanggotaan",
            describ: "Latihan Kader adalah acara yang diselenggarakan sebagai salah satu syarat calon anggota agar bisa dilantik menjadi anggota",
            imgCircular1: "",
            imgCircular2: "",
            imgCircular3: "",
            date: "22 February 2024"
          },
          {
            id: "workProgram1",
            circularMain: "",
            heading: "Latihan Kader 2",
            division: "Divisi Keanggotaan",
            describ: "Latihan Kader adalah acara yang diselenggarakan sebagai salah satu syarat calon anggota agar bisa dilantik menjadi anggota",
            imgCircular1: "",
            imgCircular2: "",
            imgCircular3: "",
            date: "22 February 2024"
          },
          {
            id: "workProgram1",
            circularMain: "",
            heading: "Latihan Kader 3",
            division: "Divisi Keanggotaan",
            describ: "Latihan Kader adalah acara yang diselenggarakan sebagai salah satu syarat calon anggota agar bisa dilantik menjadi anggota",
            imgCircular1: "",
            imgCircular2: "",
            imgCircular3: "",
            date: "22 February 2024"
          },
          {
            id: "workProgram1",
            circularMain: "",
            heading: "Latihan Kader 4",
            division: "Divisi Keanggotaan",
            describ: "Latihan Kader adalah acara yang diselenggarakan sebagai salah satu syarat calon anggota agar bisa dilantik menjadi anggota",
            imgCircular1: "",
            imgCircular2: "",
            imgCircular3: "",
            date: "22 February 2024"
          },
          {
            id: "workProgram1",
            circularMain: "",
            heading: "Latihan Kader 5",
            division: "Divisi Keanggotaan",
            describ: "Latihan Kader adalah acara yang diselenggarakan sebagai salah satu syarat calon anggota agar bisa dilantik menjadi anggota",
            imgCircular1: "",
            imgCircular2: "",
            imgCircular3: "",
            date: "22 February 2024"
          },
          {
            id: "workProgram1",
            circularMain: "",
            heading: "Latihan Kader 6",
            division: "Divisi Keanggotaan",
            describ: "Latihan Kader adalah acara yang diselenggarakan sebagai salah satu syarat calon anggota agar bisa dilantik menjadi anggota",
            imgCircular1: "",
            imgCircular2: "",
            imgCircular3: "",
            date: "22 February 2024"
          },
        ].map((cardContent)=>(
          <CardSimple className="border border-grey-5 gap-4 shadow-[0px_4px_1px_rgba(205,205,205,1)] md:shadow-[0px_6px_1px_rgba(205,205,205,1)]">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-4">
                  <div className="w-14 rounded-full bg-primary-4"></div>
                  <div className="flex flex-col gap-2 ">
                    <h2 className="font-poppins text-xl  leading-[30px] text-grey-1">{`${cardContent.heading}`}</h2>
                    <p className="font-poppins font-light text-xs  leading-[18px]">{`${cardContent.division}`}</p>
                  </div>
              </div>
              <img src="img/Options_1.png" alt="" className="h-max pt-[1px] "/>
            </div>
            <span className="border border-grey-10 w-full"></span>
          </div>


          <div className="w-[312px] 2xl:w-[450px] 2xl:gap-60">
            <p className="font-poppins font-light text-[10px] 2xl:text-xs  leading-[15px]">{`${cardContent.describ}`}</p>
          </div>

          <div className="flex flex-row justify-between mt-4">
            <div>
            {/* <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" /> */}
            </div>
            <p className="font-poppins font-semibold text-[14px] text-grey-1 leading-[21px]">Due to : <span className="font-light">{`${cardContent.date}`}</span></p>
          </div>
        </CardSimple>
        ))}
      </div>
    </div>
  )
}
