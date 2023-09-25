import React from "react"
import OprecPhaseMobile from "../../../Molecules/Mobile/OprecPhaseMobile";
import OprecHeadMobile from "../../../Molecules/Mobile/OprecHeadMobile";
import CardSimple from "../../../Molecules/CardSimple";
// import Button from "../../../Atoms/Button";
// import { Link } from "react-router-dom";

export default function OprecMobile() {
    const phaseData = [
        {
          title: "Registrasi",
          periode: "11 - 18 September 2023",
          desc: "Pada tahap ini, Calon anggota melakukan registrasi dengan mengirimkan biodata pribadi ke form pada ukmik.utdi.ac.id.",
        },
        {
          title: "Latihan Kader 1",
          periode: "Cooming Soon",
          desc: "Pada Latihan Kader 1, Calon Anggota akan dilatih dan dibekali ilmu dasar sebagai bekal untuk menjadi anggota UKM Informatika & Komputer.",
        },
        {
          title: "Latihan Kader 2",
          periode: "Cooming Soon",
          desc: "Latihan Kader 2 merupakan kegiatan lanjutan dari Latihan Kader 1, dimana pada kegiatan ini akan lebih berfokus untuk menyatukan chemistry dan keakraban dari Calon Anggota.",
        },
        {
          title: "Study Club",
          periode: "Cooming Soon",
          desc: "Study Club merupakan wadah pengembangan minat dari Calon Anggota dengan tema atau bidang yang disesuaikan dengan kebutuhan Calon Anggota.",
        },
        {
          title: "Pelantikan Anggota",
          periode: "Cooming Soon",
          desc: "Tahap dimana Calon Anggota dilantik dan sah menjadi Anggota Tetap dari UKM Informatika & Komputer.",
        },
      ];
      
    const benefitData = [
        {
          title: "Menambah Relasi",
          desc: "Kamu akan merasakan suasana seru sambil memperluas jaringan pertemananmu!"
        },
        {
          title: "Menambah Wawasan",
          desc: "Akses terbaik untuk memperluas pengetahuanmu dalam dunia informatika dan komputer."
        },
        {
          title: "Pengembangan Hardskill & Softskill",
          desc: "Wadah keren untuk melatih dan ngeboost hardskill dan softskillmu!"
        },
        {
          title: "Pengalaman Organisasi",
          desc: "Join di UKMIK akan memberikanmu pengalaman organisasi yang tak terlupakan."
        },
      ]
      
  return (
    <div>
        <div className="container flex flex-col mx-auto justify-between ">
            <div className="md:w-3/5 w-full">
              <OprecHeadMobile/>
                <h1 className="text-center font-mont font-bold mt-12 md:mt-8">Benefit Join UKM IK</h1>
                  <div className="flex flex-col w-full mt-4 relative"> {/*ini container semua card*/}
                    {benefitData.map(({title, desc}, key)=>{
                        return <CardSimple className="">
                          {
                            Number(key + 1) % 2 === 0  ? (
                              <div className="absolute top-40">
                                <div className="w-full flex flex-col items-end border border-black">
                                  <div className="w-1/2 h-10 bg-white"></div>
                                </div>
                                <div className="bg-white text-[12px] leading-[18px] rounded-none gap-2 w-full justify-center items-center text-center py-5 px-3">
                                  <img src={`img/oprec/benefit${key+1}.png`} alt="" className="w-[50px]"/>
                                  <h1 className="text-[14px]  font-mont font-bold">{title}</h1>
                                  <p className="">{desc}</p>
                                </div>
                              </div>
                            )  : (
                              <>
                                <div className="bg-primary-1 text-[12px] leading-[18px] rounded-none gap-2 w-full justify-center items-center text-center py-5 px-3">
                                  <img src={`img/oprec/benefit${key+1}.png`} alt="" className="w-[50px]"/>
                                  <h1 className="text-[14px]  font-mont font-bold">{title}</h1>
                                  <p className="">{desc}</p>
                                </div>
                                <div className="w-full flex flex-col items-start border border-black">
                                  <div className="w-1/2 h-10 bg-primary-1"></div>
                                </div>
                              </>
                            )
                          }
                        </CardSimple>
                    })}
                    {/* `${Number(key + 1) % 2 === 0 ? `/img/oprec/benefit${key+1}.png` : `/img/oprec/benefit${key+1}.png`}`
                    /img/oprec/benefit${key+1}.png` */}
                  </div>

                
            </div>

            <div className="w-fit flex flex-col gap-5">
                <h1 className="font-mont font-extrabold text-primary-4 drop-shadow-[0_4px_3px_rgba(85,183,255,1)] mt-12 text-center">Timeline Calon Anggota</h1>
                    {phaseData.map(({ title, periode, desc }, key) => {
                        return (
                        <OprecPhaseMobile
                            imgId={key + 1}
                            title={title}
                            periode={periode}
                            desc={desc}
                            isEnd={key + 1 === phaseData.length ? true : false}
                        />
                    );
                })}
            </div>
        </div>
    </div>
  )
}
