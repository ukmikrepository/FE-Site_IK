import React from 'react'

export default function Profile() {
  return (
    <div className="p-6">
        <div className="flex flex-col gap-4 items-center">
            <h1 className=" text-2xl text-primary-1 font-extrabold font-mont">Description <span className="text-gray-700"> Of </span> IK</h1>
            <div>
                <img src="./img/logo_ukmik.png" alt="" className="w-32 "/>
                
            </div>
            {/* <h3 className="bg-primary-8 rounded-full text-sm font-semibold py-1 px-4 text-gray-700">Unit Kegiatan Mahasiswa</h3>
            <div className="flex flex-row gap-2">
                <h3 className="bg-primary-8 text-gray-700 rounded-full text-sm font-semibold py-1 px-4">informatika</h3>
                <h3 className="bg-primary-8 text-gray-700 rounded-full text-sm font-semibold py-1 px-4">dan</h3>
                <h3 className="bg-primary-8 text-gray-700 rounded-full text-sm font-semibold py-1 px-4">Komputer</h3>
            </div> */}
        <div className="flex flex-col gap-2 font-semibold font-poppins text-sm text-grey-2">
            <p>Unit Kegiatan Mahasiswa</p>
            <p>Informatika dan Komputer</p>
        </div>

        </div>
        <div className="py-4 px-2 ">
            <div className="py-8 px-5 border rounded-2xl bg-primary-8 text-justify text-gray-700 text-sm flex flex-col gap-4">
                <p className="indent-8">UKM Informatika dan Komputer di UTDI (Universitas Teknologi Duta Indonesia), yang sebelumnya dikenal sebagai STMIK Akakom Yogyakarta, berdiri pada tanggal 12 April 1995 tanpa batasan waktu yang ditentukan.</p>
                <p className="indent-8">Tujuan utamanya adalah mendorong pengembangan keilmuan dan penalaran ilmiah, mengaktifkan kreativitas dan inovasi di kalangan pengurus dan anggota, serta melaksanakan kegiatan sosial yang memberikan manfaat kepada masyarakat.</p>
                <p className="indent-8">Dengan fokus pada pengembangan ilmu dan kontribusi sosial, UKM Informatika dan Komputer di UTDI menjadi wadah yang berharga untuk pengembangan pengetahuan dan pelayanan masyarakat.</p>
            </div>
        </div>
        <div className="py-4 px-2 text-center flex flex-col gap-2">
            <h1 className="text-2xl font-medium">Visi & Misi</h1>
            <div className="flex flex-col gap-2  md:flex-row border w-auto max-w">
                <div className="py-4 px-5 border flex flex-col gap-4 rounded-2xl bg-primary-3 text-justify text-primary-9 text-sm xl:w-2/3">
                    <h3 className="mx-auto">Visi</h3>
                    <p>Visi UKM Informatika dan Komputer di UTDI adalah menjadi wadah yang berdedikasi untuk menggali, meningkatkan, dan mengembangkan kreativitas dalam bidang keilmuan dan penalaran ilmiah, sambil aktif melaksanakan kegiatan sosial yang memberikan manfaat positif kepada masyarakat.</p>
                </div>
                <div className="py-4 px-5 border flex flex-col gap-4 rounded-2xl bg-primary-3 text-justify text-primary-9 text-sm xl:w-2/3">
                    <h3 className="mx-auto">Misi</h3>
                    <div className="flex flex-col gap-2">
                        <p>1. Menjadi wadah yang aktif dalam menggali, meningkatkan, dan mengembangkan keilmuan dan penalaran ilmiah di kalangan anggota.</p>
                        <p>2. Menyediakan wahana yang mendukung kreativitas dan inovasi, baik bagi pengurus maupun anggota UKM.</p>
                        <p>3. Melakukan pemberdayaan dan pembinaan terhadap prestasi anggota dan pengurus untuk mencapai potensi tertinggi mereka.</p>
                        <p>4. Menjadikan diri sebagai wahana pengabdian kepada masyarakat dengan memberikan kontribusi positif dan berkelanjutan kepada komunitas sekitar.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
