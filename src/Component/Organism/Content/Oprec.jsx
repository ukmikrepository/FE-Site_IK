import React from "react";
import OprecPhase from "../../Molecules/OprecPhase";
import OprecHead from "../../Molecules/OprecHead";
import CardSimple from "../../Molecules/CardSimple";

export default function Oprec() {
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
      desc: "kamu akan merasakan suasana seru sambil memperluas jaringan pertemananmu!"
    },
    {
      title: "Menambah Wawasan",
      desc: "akses terbaik untuk memperluas pengetahuanmu dalam dunia informatika dan komputer."
    },
    {
      title: "Pengembangan Hardskill & Softskill",
      desc: "wadah keren untuk melatih dan ngeboost hardskill dan softskillmu!"
    },
    {
      title: "Pengalaman Organisasi",
      desc: "Join di UKMIK akan memberikanmu pengalaman organisasi yang tak terlupakan."
    },
  ]

  return (
    <div className="w-full bg-primary-9 py-12">
      <div className="container flex mx-auto justify-between">
        <div className="w-3/5">
          <OprecHead />
          <h1 className="text-center font-mont font-bold mt-8">Benefit Join UKM IK</h1>
          <div className="flex gap-4 mt-4">
            {benefitData.map(({title, desc}, key)=>{
              return <CardSimple className="bg-white rounded-none gap-2 w-[150px] justify-center items-center text-center">
                <img src={`/img/oprec/benefit${key+1}.png`} alt="" className="w-[50px]" />
                <h1 className="text-[10px]  font-mont font-bold">{title}</h1>
                <p className="text-[8px]">{desc}</p>
              </CardSimple>
            })}
          </div>
        </div>

        <div className="w-2/5 flex flex-col gap-12">
          {phaseData.map(({ title, periode, desc }, key) => {
            return (
              <OprecPhase
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
  );
}
