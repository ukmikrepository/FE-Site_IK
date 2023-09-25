import React from 'react'
import CardSimple from '../../Molecules/CardSimple'

export default function WorkProgram() {
  return (
    <div className="w-full h-full relative py-12" style={{ backgroundImage: "url('img/OurProgram_BG.png')" }}>
      {/* <img src="img/OurProgram_BG.png" alt="" className="2xl:h-fit w-full absolute -z-50"/> */}

      <div className="container mx-auto">
        <div className="w-max mx-auto text-center">
          <h1 className="font-mont font-semibold text-primary-4  text-[35px] leading-10 drop-shadow-[0_2px_2px_rgba(8,4,174,1)]">Our Work <br className="xs:inline md:hidden"/> Program</h1>
          <p className="font-poppins text-[20px] leading-[45px]">February 2023</p>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between mt-12 2xl:mt-28 gap-y-8 xl:gap-y-10 gap-x-8 xl:gap-x-10">
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
            date: "22 February 2024",
            disabled: false,
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
            date: "22 February 2024",
            disabled: false,
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
            date: "22 February 2024",
            disabled: true,
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
            date: "22 February 2024",
            disabled: true,
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
            date: "22 February 2024",
            disabled: true,
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
            date: "22 February 2024",
            disabled: true,
          },
        ].map((cardContent)=>(
          <CardSimple className={`${
            cardContent.disabled
              ? "bg-grey-9" // Ubah warna latar belakang untuk kartu "Coming Soon"
              : "bg-white"
          } gap-4 shadow-[0px_4px_1px_rgba(205,205,205,1)] backdrop-blur-md md:shadow-[0px_6px_1px_rgba(205,205,205,1)] hover:shadow-lg transition-transform transform hover:scale-105 ease-in-out duration-300 px-5 py-6`} // Tambahkan efek hover dan perubahan ukuran saat mengarahkan kursor ke kartu
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-4">
                  <img src="/img/logo_ukmik.png" className="w-14" alt="Logo_UKMIK" />
                  <div className="flex flex-col gap-2 ">
                    <h2 className="font-poppins text-lg  leading-[30px] text-grey-1">{`${cardContent.disabled ? "Coming Soon" : cardContent.heading}`}</h2>
                    <p className="font-poppins font-light text-xs leading-[18px]">{`${cardContent.division}`}</p>
                  </div>
              </div>
              <img src="img/Options_1.png" alt="" className="h-max pt-[1px] "/>
            </div>
            <span className="border border-grey-10 w-full"></span>
          </div>


          <div className="w-[312px] ">
            <p className="font-poppins font-light text-[14px] leading-[21px] ">{`${cardContent.disabled ? "Proker ini akan direncanakan segera. ditunggu yaa!" : cardContent.describ}`}</p>
          </div>

          <div className="flex flex-row justify-between mt-4">
            <div>
            {/* <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" /> */}
            </div>
            <p className="font-poppins font-semibold text-[14px] text-grey-1 leading-[21px]">Due to : <span className="font-light">{`${cardContent.disabled ? "Coming Soon" : cardContent.date}`}</span></p>
          </div>
        </CardSimple>
        ))}
      </div>
    </div>
  )
}
