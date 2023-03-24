import React from "react";
import Image from "next/image";
import img from "../assets/Boy-PNG-Picture.png";
import style from "../styles/font.module.css";
import { FaLaptopCode, FaGithubSquare } from "react-icons/fa";
import { FiDownload, FiSend } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { ImFacebook2, ImWhatsapp } from "react-icons/im";
import { MdLocationPin, MdOutlineMail } from "react-icons/md";

const LeftSide = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center py-10">
        <Image
          className="object-contain bg-gray-300 rounded-full"
          src={img}
          alt=""
          width={100}
          height={100}
        ></Image>
      </div>
      <div>
        <h2 className={`${style.font} text-2xl font-bold text-[#001E00]`}>
          {" "}
          <span className="text-[#FB641B]">KOPI</span> HANNAN
        </h2>
        <div className="bg-[#FB641B] mx-auto w-[200px] text-white h-10 text-center flex justify-center items-center rounded-lg my-3 ">
          <p className="flex items-center justify-center gap-1 font-medium">
            <span>
              <FaLaptopCode></FaLaptopCode>
            </span>
            Full Stack Developer
          </p>
        </div>
        <div className="bg-[#FB641B] mx-auto w-[200px] text-white h-10 text-center flex justify-center items-center rounded-lg mb-3 ">
          <button className="flex items-center justify-center gap-1 font-medium">
            {" "}
            <span>
              <FiDownload></FiDownload>
            </span>
            Download Resume
          </button>
        </div>
        <div className="flex justify-center gap-5 mb-5">
          <BsLinkedin size={25} color="#0072b1"></BsLinkedin>
          <FaGithubSquare size={25} color="#6e5494"></FaGithubSquare>
          <ImFacebook2 size={25} color="#3b5998"></ImFacebook2>
        </div>
        <div className="bg-[#F2F3F7] p-5 text-[#001E00] mb-7 font-medium">
          <div className="flex items-center justify-center gap-1">
            <ImWhatsapp size={14}></ImWhatsapp>
            <p>+8801405758566</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MdLocationPin></MdLocationPin>
            <p className="">Lakshmipur, Bangladesh</p>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MdOutlineMail size={16}></MdOutlineMail>
              <p>kopihannan3@gmail.com</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#FB641B] to-[#fb1b9e] mx-auto w-[150px] text-white h-10 text-center flex justify-center items-center rounded-lg mb-8">
          <button className="flex items-center justify-center gap-1 font-medium">
            Email Me{" "}
            <span>
              <FiSend></FiSend>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
