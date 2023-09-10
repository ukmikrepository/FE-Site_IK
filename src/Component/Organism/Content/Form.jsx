import React, {useState} from 'react'
import { CardSimple } from '../../Molecules/CardSimple'
import Input from '../../Atoms/Input';
import Button from '../../Atoms/Button';

export default function Form() {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
            setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
    
        const file = e.dataTransfer.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleDragOver = (e) => {
        e.preventDefault();
      };

  return (
    <div className="w-screen border border-red-600 bg-[#FAFAFA] py-8">
        <div className="border border-yellow-400 pl-7 md:pl-14">
            <a href="gooooogleee.com">
                <img src="img/logo_ukmik.png" alt="" className="w-[60px] md:w-[80px] h-[60px] md:h-[80px]" />
            </a>
        </div>
        <div className="w-11/12 md:w-4/5 mx-auto flex flex-col gap-4 md:gap-y-8">
            <div className="border border-green-700 text-center">
                <h3 className="font-poppins font-semibold text-xl leading-[30px] md:text-[40px] md:leading-[60px] text-primary-4 ">Formulir Pendaftaran</h3>
                <h1 className="font-mont font-extrabold text-[30px] leading-[36px] md:text-[60px] md:leading-[73px] text-primary-6 drop-shadow-[0px_8px_4px_rgba(221,224,225,1)]">UKM IK</h1>
                <p className="font-poppins text-sm md:text-xl leading-[18px] md:leading-[30px] text-grey-4">Periode 2023/2024</p>
            </div>
            <CardSimple className="border bg-white rounded-[20px]">
                <h3 className="font-poppins font-semibold text-[25px] leading-[37px] mx-auto mt-3 hidden md:block">REGISTRASI DATA DIRI</h3>
                <div className="flex flex-col gap-3">
                    <div className="mx-8 md:mx-6 mt-6 md:mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-6">
                            <Input
                                label="Nama"
                                name="firstname"
                                type="text"
                                placeholder="Nama depan..."
                                hasFullBorder={true}
                                className="bg-[#F4F4F4] placeholder:text-sm py-3"
                                classLabel="text-black font-black text-base"
                            />
                            <Input
                                label="Nama"
                                name="lastname"
                                type="text"
                                placeholder="Nama belakang..."
                                hasFullBorder={true}
                                className="bg-[#F4F4F4] placeholder:text-sm py-3"
                                classLabel="text-white font-black text-base hidden md:block"
                            />
                        </div>
                    </div>
                    <div className="mx-8 md:mx-6 mb-6 grid xs:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 md:gap-y-3">
                        <Input
                            label="NIM"
                            name=""
                            type="text"
                            placeholder="Masukkan nim..."
                            hasFullBorder={true}
                            className="bg-[#F4F4F4] placeholder:text-sm py-3"
                            classLabel="text-black font-black text-base"
                        />
                        <Input
                            label="Angkatan"
                            name=""
                            type="text"
                            placeholder="Nama Depan..."
                            hasFullBorder={true}
                            className="bg-[#F4F4F4] placeholder:text-sm py-3"
                            classLabel="text-black font-black text-base"
                        />
                        <Input
                            label="Jenis Kelamin"
                            name=""
                            type="text"
                            placeholder="Nama Depan..."
                            hasFullBorder={true}
                            className="bg-[#F4F4F4] placeholder:text-sm py-3"
                            classLabel="text-black font-black text-base"
                        />
                        <Input
                            label="Agama"
                            name=""
                            type="text"
                            placeholder="Nama Depan..."
                            hasFullBorder={true}
                            className="bg-[#F4F4F4] placeholder:text-sm py-3"
                            classLabel="text-black font-black text-base"
                        />
                        <Input
                            label="Fakultas"
                            name=""
                            type="text"
                            placeholder="Nama Depan..."
                            hasFullBorder={true}
                            className="bg-[#F4F4F4] placeholder:text-sm py-3"
                            classLabel="text-black font-black text-base"
                        />
                        <Input
                            label="Program Studi"
                            name=""
                            type="text"
                            placeholder="Nama Depan..."
                            hasFullBorder={true}
                            className="bg-[#F4F4F4] placeholder:text-sm py-3"
                            classLabel="text-black font-black text-base"
                        />
                        <Input
                            label="Email"
                            name=""
                            type="text"
                            placeholder="Masukkan email..."
                            hasFullBorder={true}
                            className="bg-[#F4F4F4] placeholder:text-sm py-3"
                            classLabel="text-black font-black text-base"
                        />
                        <Input
                            label="No. Telepon"
                            name=""
                            type="text"
                            placeholder="Masukkan nomor..."
                            hasFullBorder={true}
                            className="bg-[#F4F4F4] placeholder:text-sm py-3"
                            classLabel="text-black font-black text-base"
                        />

                        {/* <div className="border">
                            <div className="border">
                                <h3 className="text-black font-black text-base">Upload Foto</h3>
                                <form action=""></form>
                            </div>
                            <Button anotherClass="text-white">SUBMIT</Button>
                        </div> */}
                    </div>
                </div>
            </CardSimple>


            <div className="flex flex-col items-center space-y-4 border" onDrop={handleDrop} onDragOver={handleDragOver}>
            <h2 className="text-2xl font-semibold">Upload Gambar</h2>
            {imagePreview && (
                <img
                src={imagePreview}
                alt="Preview"
                className="max-w-xs max-h-64 object-cover rounded-lg"
                />
            )}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <p className="text-gray-500">Atau seret gambar ke sini</p>
            </div>




        </div>
    </div>
  )
}
