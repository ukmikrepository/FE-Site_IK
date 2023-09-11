import React, { useState, useRef } from "react";
import CardSimple from "../../Molecules/CardSimple";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import { ToastContainer, toast } from "react-toastify";
// import { redirect } from "react-router-dom";

export default function FormOprec({setFinish}) {
  const [imagePreview, setImagePreview] = useState(null);
  const [customText, setCustomText] = useState("Pilih gambar");
  const [isProdi, setIsProdi] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const imageRef = useRef(null);

  const prodiData = (faculty) => {
    if (faculty === "2") {
      return [
        {
          id: 7,
          prodi: "S1 - Bisnis Digital",
        },
        {
          id: 8,
          prodi: "S1 - Manajemen Ritel",
        },
      ];
    } else {
      return [
        {
          id: 1,
          prodi: "D3 - Rekayasa Perangkat Lunak Aplikasi",
        },
        {
          id: 2,
          prodi: "D3 - Sistem Informasi Akuntansi",
        },
        {
          id: 3,
          prodi: "D3 - Teknologi Komputer",
        },
        {
          id: 4,
          prodi: "S1 - Informatika",
        },
        {
          id: 5,
          prodi: "S1 - Sistem Informasi",
        },
        {
          id: 6,
          prodi: "S1 - Teknik Komputer",
        },
      ];
    }
  };

  const [prodi, setProdi] = useState(prodiData("1"));

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setCustomText("Gambar dipilih");
        setSelectedFile(file);
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
        setSelectedFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const facultyChange = (e) => {
    if (e.target.value !== "default") {
      setIsProdi(true);
      setProdi(prodiData(e.target.value));
    } else {
      setIsProdi(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const formData = new FormData();
    formData.append("nama", `${e.target.firstname.value} ${e.target.lastname.value}`);
    formData.append("nim", e.target.nim.value);
    formData.append("angkatan", e.target.angkatan.value);
    formData.append("j_kelamin", e.target.j_kelamin.value);
    formData.append("fakultas", e.target.fakultas.value);
    formData.append("jurusan", e.target.jurusan.value);
    formData.append("email", e.target.email.value);
    formData.append("no_telp", e.target.no_telp.value);
  
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
  
    // Validasi form sebelum mengirim data
    const isFormValid = validateForm(e.target);
  
    if (!isFormValid) {
      setIsLoading(false);
      return; // Jangan lanjutkan jika form tidak valid
    }
  
    try {
      const response = await fetch("https://ukmik.utdi.ac.id/api/ca", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message);
      } else {
        // Handle sukses
        toast.success("Terimakasih telah mendaftar UKM IK!!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          localStorage.setItem('isFormFilled','true');
          setFinish('true');
      }
    } catch (error) {
      // Handle kesalahan
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Fungsi untuk validasi form
  const validateForm = (form) => {
    const firstnameInput = form.firstname;
    const lastnameInput = form.lastname;
    const nimInput = form.nim;
    const angkatanInput = form.angkatan;
    const emailInput = form.email;
  
    let isFormValid = true;
  
    // Validasi nama depan
    if (firstnameInput.value.trim() === "") {
      setInvalidInput(firstnameInput, "Nama depan harus diisi.");
      isFormValid = false;
    } else {
      setValidInput(firstnameInput);
    }
  
    // Validasi nama belakang
    if (lastnameInput.value.trim() === "") {
      setInvalidInput(lastnameInput, "Nama belakang harus diisi.");
      isFormValid = false;
    } else {
      setValidInput(lastnameInput);
    }
  
    // Validasi NIM
    const nimValue = nimInput.value.trim();
    if (nimValue === "" || nimValue.length > 11 || !/^\d+$/.test(nimValue)) {
      setInvalidInput(nimInput, "NIM harus terdiri dari 11 angka.");
      isFormValid = false;
    } else {
      setValidInput(nimInput);
    }
  
    // Validasi angkatan
    const angkatanValue = angkatanInput.value.trim();
    if (angkatanValue === "" || angkatanValue.length > 4 || !/^\d+$/.test(angkatanValue)) {
      setInvalidInput(angkatanInput, "Angkatan harus terdiri dari 4 angka.");
      isFormValid = false;
    } else {
      setValidInput(angkatanInput);
    }
  
    // Validasi email
    const emailValue = emailInput.value.trim();
    if (emailValue === "" || !isValidEmail(emailValue)) {
      setInvalidInput(emailInput, "Email tidak valid.");
      isFormValid = false;
    } else {
      setValidInput(emailInput);
    }
  
    return isFormValid;
  };
  
  // Fungsi untuk memvalidasi email
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
  // Fungsi untuk menandai input yang tidak valid
  const setInvalidInput = (inputElement, errorMessage) => {
    inputElement.style.border = "2px solid red";
    const errorLabel = document.createElement("p");
    errorLabel.textContent = errorMessage;
    errorLabel.style.color = "red";
    errorLabel.style.fontSize = "12px";
    errorLabel.style.marginTop = "4px";
    inputElement.parentNode.appendChild(errorLabel);
  };
  
  // Fungsi untuk menghapus tanda input yang tidak valid
  const setValidInput = (inputElement) => {
    inputElement.style.border = "1px solid #ccc";
    const errorLabel = inputElement.parentNode.querySelector("p");
    if (errorLabel) {
      inputElement.parentNode.removeChild(errorLabel);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="regisForm">
      <div className="w-11/12 md:w-4/5 mx-auto flex flex-col gap-4 md:gap-y-8">
        <div className="text-center">
          <h3 className="font-poppins font-semibold text-xl leading-[30px] md:text-[40px] md:leading-[60px] text-primary-4 ">
            Formulir Pendaftaran
          </h3>
          <h1 className="font-mont font-extrabold text-[30px] leading-[36px] md:text-[60px] md:leading-[73px] text-primary-6 drop-shadow-[0px_8px_4px_rgba(221,224,225,1)]">
            UKM IK
          </h1>
          <p className="font-poppins text-sm md:text-xl leading-[18px] md:leading-[30px] text-grey-4">
            Periode 2023/2024
          </p>
        </div>
        <CardSimple className="border bg-white rounded-[20px]">
          <h3 className="font-poppins font-semibold text-[25px] leading-[37px] mx-auto mt-6 hidden md:block">
            REGISTRASI DATA DIRI
          </h3>
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
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 md:gap-y-3">
              <Input
                label="NIM"
                name="nim"
                type="text"
                placeholder="Masukkan nim..."
                hasFullBorder={true}
                className="bg-[#F4F4F4] placeholder:text-sm py-3"
                classLabel="text-black font-black text-base"
              />
              <Input
                label="Angkatan"
                name="angkatan"
                type="text"
                placeholder="Nama Depan..."
                hasFullBorder={true}
                className="bg-[#F4F4F4] placeholder:text-sm py-3"
                classLabel="text-black font-black text-base"
              />
              <div className="flex flex-col justify-center gap-1 py-0 -mt-3 mb-4 md:md">
                <label htmlFor="j_kelamin" className="font-bold">
                  Jenis Kelamin
                </label>
                <select
                  name="j_kelamin"
                  id="j_kelamin"
                  className="bg-[#f4f4f4] py-3 rounded-xl outline-none"
                >
                  <option value="default">Pilih Jenis Kelamin </option>
                  <option value="1">Laki-Laki</option>
                  <option value="2">Perempuan</option>
                </select>
              </div>
              <div className="flex flex-col justify-center gap-1 py-0 -mt-3 mb-4 md:md">
                <label htmlFor="fakultas" className="font-bold">
                  Fakultas
                </label>
                <select
                  name="fakultas"
                  id="fakultas"
                  className="bg-[#f4f4f4] py-3 rounded-xl outline-none"
                  onChange={facultyChange}
                >
                  <option value="default">Pilih Fakultas </option>
                  <option value="1">Fakultas Teknologi Informasi</option>
                  <option value="2">Fakultas Manajemen & Bisnis</option>
                </select>
              </div>
              <div className="flex flex-col justify-center gap-1 py-0 -mt-3 mb-4 md:md">
                <label htmlFor="jurusan" className="font-bold">
                  Program Studi
                </label>
                <select
                  name="jurusan"
                  id="jurusan"
                  disabled={!isProdi}
                  className={`${
                    isProdi ? "bg-[#f4f4f4]" : "bg-[#c4c4c4]"
                  } outline-none py-3 rounded-xl`}
                >
                  <option value="default">Pilih Program Studi </option>
                  {prodi.map(({ id, prodi }) => {
                    return <option value={id}>{prodi}</option>;
                  })}
                </select>
              </div>
              <Input
                label="Email"
                name="email"
                type="text"
                placeholder="Masukkan email..."
                hasFullBorder={true}
                className="bg-[#F4F4F4] placeholder:text-sm py-3"
                classLabel="text-black font-black text-base"
              />
              <Input
                label="No. Telepon"
                name="no_telp"
                type="text"
                placeholder="Masukkan nomor..."
                hasFullBorder={true}
                className="bg-[#F4F4F4] placeholder:text-sm py-3"
                classLabel="text-black font-black text-base"
              />

              <div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-black font-black text-base">
                    Upload Foto
                  </h3>
                  <div
                    className={`${
                      imagePreview
                        ? "flex flex-col gap-4 items-center border-dashed border-[3px] border-rgba(0,0,0,0.3) rounded-2xl bg-[#EFF3F6] px-2 py-14"
                        : "flex flex-col gap-4 items-center border-dashed border-[3px] border-rgba(0,0,0,0.3) rounded-2xl bg-[#EFF3F6] px-14 py-2"
                    }`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-w-xs max-h-xs w-1/2 object-cover rounded-lg"
                      />
                    ) : (
                      <div>
                        <img
                          src="img/oprec/imgIlustration.png"
                          alt=""
                          className="w-[90px] h-[90px]"
                        />
                        <p className="hidden">{customText}</p>
                      </div>
                    )}
                    <Button
                      anotherClass={`${
                        imagePreview
                          ? "flex items-center py-1 mt-4 hover:bg-primary-6"
                          : "flex items-center py-1 hover:bg-primary-6"
                      }`}
                      color="bg-primary-5 text-white"
                      eventHandler={() => {
                        imageRef.current.click();
                      }}
                    >
                      <img
                        src="/img/oprec/file-add.png"
                        alt="File-Add"
                        className="w-[30px] h-[30px]"
                      />
                      <p className="text-sm">
                        {customText === "Pilih gambar"
                          ? "Pilih Gambar"
                          : "Ganti Gambar"}
                      </p>
                    </Button>

                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      form="regisForm"
                      ref={imageRef}
                      onChange={handleImageChange}
                      className="py-2 px-4 border hidden border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <p className="text-black font-black text-base mb-2">
                      or Drop File Here
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="text-white w-fit rounded-[48px] hover:bg-primary-6 bg-primary-1 py-2 px-4"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.294a7.963 7.963 0 004.596-1.634 7.96 7.96 0 002.847-5.37H6v6.004z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "SUBMIT"
                )}
              </button>
              <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </div>
          </div>
        </CardSimple>
      </div>
    </form>
  );
}
