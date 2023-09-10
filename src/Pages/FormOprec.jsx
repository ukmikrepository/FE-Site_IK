import React, {useState, useRef} from 'react'
import CardSimple from '../Component/Molecules/CardSimple'
import Input from '../Component/Atoms/Input';
import Button from '../Component/Atoms/Button';


export default function FormOprec() {
    const [imagePreview, setImagePreview] = useState(null);
    const [customText, setCustomText] = useState("Pilih gambar");

    const imageRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            setImagePreview(reader.result);
            setCustomText("Gambar dipilih");
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
    <div className="w-screen bg-[#FAFAFA] py-8">
        <div className="pl-7 md:pl-14">
            <a href="gooooogleee.com">
                <img src="img/logo_ukmik.png" alt="" className="w-[60px] md:w-[80px] h-[60px] md:h-[80px]" />
            </a>
        </div>
        <div className="w-11/12 md:w-4/5 mx-auto flex flex-col gap-4 md:gap-y-8">
            <div className="text-center">
                <h3 className="font-poppins font-semibold text-xl leading-[30px] md:text-[40px] md:leading-[60px] text-primary-4 ">Formulir Pendaftaran</h3>
                <h1 className="font-mont font-extrabold text-[30px] leading-[36px] md:text-[60px] md:leading-[73px] text-primary-6 drop-shadow-[0px_8px_4px_rgba(221,224,225,1)]">UKM IK</h1>
                <p className="font-poppins text-sm md:text-xl leading-[18px] md:leading-[30px] text-grey-4">Periode 2023/2024</p>
            </div>
            <CardSimple className="border bg-white rounded-[20px]">
                <h3 className="font-poppins font-semibold text-[25px] leading-[37px] mx-auto mt-6 hidden md:block">REGISTRASI DATA DIRI</h3>
                <div className="flex flex-col gap-3 px-8 md:px-6 mb-6">
                    <div className="mt-6 md:mt-16">
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
                    <div className="mb-6 grid xs:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 md:gap-y-3">
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

                        <div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-black font-black text-base">Upload Foto</h3>
                                <div className={`${imagePreview ? ("flex flex-col gap-4 items-center border-dashed border-[3px] border-rgba(0,0,0,0.3) rounded-2xl bg-[#EFF3F6] px-2 py-14") : ("flex flex-col gap-4 items-center border-dashed border-[3px] border-rgba(0,0,0,0.3) rounded-2xl bg-[#EFF3F6] px-14 py-2")}`} onDrop={handleDrop} onDragOver={handleDragOver}>
                                    {imagePreview ? (
                                        <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="max-w-xs max-h-xs object-cover rounded-lg"
                                        />
                                    ) : (
                                        <div>
                                            <img src="img/oprec/imgIlustration.png" alt="" className="w-[90px] h-[90px]" />
                                            <p className="hidden">{customText}</p>
                                        </div>

                                    )}
                                    <Button anotherClass={`${imagePreview ? ("flex items-center py-1 mt-4 hover:bg-primary-6"):("flex items-center py-1 hover:bg-primary-6")}`} color="bg-primary-5 text-white" eventHandler={()=>{imageRef.current.click();}}>
                                        <img src="/img/oprec/file-add.png" alt="File-Add" className="w-[30px] h-[30px]"/>
                                        <p className="text-sm">{customText === "Pilih gambar" ? "Pilih Gambar" : "Ganti Gambar"}</p>
                                    </Button>
                                    
                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="imageInput"
                                        ref={imageRef}
                                        onChange={handleImageChange}
                                        className="py-2 px-4 border hidden border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                    />
                                    <p className="text-black font-black text-base mb-2">or Drop File Here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <Button anotherClass="text-white w-fit rounded-[48px] hover:bg-primary-6">SUBMIT</Button>
                    </div>
                </div>
            </CardSimple>
        </div>
    </div>
  )
}
