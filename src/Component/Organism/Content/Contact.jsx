import React from "react";
import {
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoWhatsapp,
} from "react-icons/bi";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";

export default function Contact() {
  return (
    <div className="w-full h-auto bg-primary-10 mt-24 py-12">
      <h1 className="font-mont font-extrabold text-center text-3xl">
        Contact Us
      </h1>
      <p className="text-center font-light text-grey-3">
        Any question or Remarks? Just Write Us a Message
      </p>
      <div className="mx-auto flex my-12 container">
        <div className="bg-primary-2 w-2/5 rounded-l-[40px]">
          <div className="py-12 px-10 rounded-[40px] text-white">
            <h1 className="font-mont font-extrabold">Contact Information</h1>
            <p className="text-[9px] text-grey-9 mt-2">
              Kami siap membantu Anda dengan segala pertanyaan, komentar, atau
              permintaan. Jangan ragu untuk menghubungi kami!
            </p>

            <div className="flex flex-col mt-8 gap-8">
              <div className="flex items-center gap-2">
                <BiLogoWhatsapp />{" "}
                <a className="text-[10px]" href="https://wa.me/6282171392206">
                  082171392206
                </a>
              </div>
              <div className="flex items-center gap-2">
                <BiLogoInstagram />{" "}
                <a className="text-[10px]" href="https://instagram.com/ukmik">
                  @ukmik
                </a>
              </div>
              <div className="flex items-center gap-2">
                <BiLogoGmail />{" "}
                <a href="mailto:ukmik@utdi.ac.id" className="text-[10px]">
                  ukmik@utdi.ac.id
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-3/5 rounded-r-[40px]">
          <div className="py-12 px-10">
            <div className="flex justify-between gap-6">
              <Input
                label="First Name"
                name="firstName"
                type="text"
                placeholder="write your first name"
              />
              <Input
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="write your last name"
              />
            </div>
            <div className="flex justify-between gap-6">
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="write your email"
              />
              <Input
                label="Phone"
                name="phone"
                type="tel"
                placeholder="write your phone number"
              />
            </div>
            <div className="">
              <Input
                label="Message"
                name="phone"
                type="tel"
                placeholder="write your message"
              />
            </div>
            <h1 className="font-bold mt-6 text-sm">what topic you need to ask ?</h1>
            <div className="flex w-full mt-2 gap-5">
              <Input
                label="Open Recruitment"
                name="topic"
                type="radio"
                value="oprec"
              />
              <Input
                label="Study Club"
                name="topic"
                type="radio"
                value="studyclub"
              />
              <Input
                label="Other"
                name="topic"
                type="radio"
                value="other"
              />
            </div>
            <div className="flex w-full justify-end">
              <Button anotherClass="text-white rounded-full">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
