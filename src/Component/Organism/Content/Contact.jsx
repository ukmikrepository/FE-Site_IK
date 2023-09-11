import React from "react";
import {
  // BiLogoFacebook,
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoWhatsapp,
  // BiLogoYoutube,
} from "react-icons/bi";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";

export default function Contact() {
  return (
    <div className="w-full h-auto bg-primary-10 mt-24 py-12">
      <h1 className="font-mont font-extrabold text-center text-3xl">
        Contact Us
      </h1>
      <div className="w-full flex justify-center mt-2">
        <p className="text-center font-light text-grey-3 w-2/3">
          Any question or Remarks? Just Write Us a Message
        </p>
      </div>
      <div className="mx-auto flex flex-col md:flex-row my-12 container">
        <div className="bg-white md:bg-primary-2 w-full md:w-2/5 rounded-t-[40px] md:rounded-r-none md:rounded-l-[40px]">
          <div className="pt-12 pb-6 md:py-12 px-10 rounded-[40px] text-white">
            <h1 className="font-mont font-extrabold text-lg text-black md:text-grey-9 mt-2">
              Contact Information
            </h1>
            <p className="text-sm text-black md:text-grey-9 mt-2">
              Kami siap membantu Anda dengan segala pertanyaan, komentar, atau
              permintaan. Jangan ragu untuk menghubungi kami!
            </p>

            <div className="flex flex-row flex-wrap gap-4 md:flex-nowrap mt-8 justify-between md:gap-8 text-black md:text-grey-9 text-sm md:flex-col ">
              <div className="flex items-center gap-2">
                <BiLogoWhatsapp className="w-[20px] h-[20px]" />{" "}
                <a className="" href="https://wa.me/6282171392206">
                  082171392206
                </a>
              </div>
              <div className="flex items-center gap-2">
                <BiLogoInstagram className="w-[20px] h-[20px]" />{" "}
                <a className="" href="https://instagram.com/ukmik">
                  @ukmik
                </a>
              </div>
              <div className="flex items-center gap-2">
                <BiLogoGmail className="w-[20px] h-[20px]" />{" "}
                <a className="" href="mailto:ukmik@utdi.ac.id">
                  ukmik@utdi.ac.id
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary-2 md:bg-white w-full md:w-3/5 rounded-b-[40px] md:rounded-l-none md:rounded-r-[40px]  ">
          <div className="py-12 px-10">
            <div className="flex justify-between gap-6">
              <Input
                label="First Name"
                name="firstName"
                type="text"
                placeholder="write your first name"
                className="bg-primary-2 md:bg-white border-b border-white md:border-black placeholder:text-primary-9 md:placeholder:text-black placeholder:font-thin text-white"
                classLabel="text-white md:text-black text-sm font-bold"
              />
              <Input
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="write your last name"
                className="bg-primary-2 md:bg-white border-b border-white md:border-black placeholder:text-primary-9 md:placeholder:text-black placeholder:font-thin text-white"
                classLabel="text-white md:text-black text-sm font-bold"
              />
            </div>
            <div className="flex justify-between gap-6">
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="write your email"
                className="bg-primary-2 md:bg-white border-b border-white md:border-black placeholder:text-primary-9 md:placeholder:text-black placeholder:font-thin text-white"
                classLabel="text-white md:text-black text-sm font-bold"
              />
              <Input
                label="Phone"
                name="phone"
                type="tel"
                placeholder="write your phone number"
                className="bg-primary-2 md:bg-white border-b border-white md:border-black placeholder:text-primary-9 md:placeholder:text-black placeholder:font-thin text-white"
                classLabel="text-white md:text-black text-sm font-bold"
              />
            </div>
            <div className="">
              <Input
                label="Message"
                name="phone"
                type="tel"
                placeholder="write your message"
                className="bg-primary-2 md:bg-white border-b border-white md:border-black placeholder:text-primary-9 md:placeholder:text-black placeholder:font-thin text-white"
                classLabel="text-white md:text-black text-sm font-bold"
                // hasFullBorder={true}
                // className="shadow-lg"
              />
            </div>
            <h1 className="font-bold mt-6 text-sm text-white md:text-black">
              What topic you need to ask ?
            </h1>
            <div className="flex w-full mt-2 gap-5">
              <Input
                label="Open Recruitment"
                name="topic"
                type="radio"
                value="oprec"
                className="text-white md:text-black"
              />
              <Input
                label="Study Club"
                name="topic"
                type="radio"
                value="studyclub"
                className="text-white md:text-black"
              />
              <Input
                label="Other"
                name="topic"
                type="radio"
                value="other"
                className="text-white md:text-black"
              />
            </div>
            <div className="flex w-full justify-end">
              <Button
                color="bg-white md:bg-primary-2"
                anotherClass="text-primary-2 md:text-white rounded-full hover:bg-grey-10 md:hover:bg-primary-1"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
