import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        data-aos="zoom-in"
        src={contactImg}
        alt="contactImg"
      />

      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white" data-aos="zoom-in">
          Airin Rahat Promi
        </h3>

        <p className="text-lg font-normal text-gray-400" data-aos="zoom-in">
          MERN Stack Developer
        </p>

        <p className="text-base text-gray-400 tracking-wide" data-aos="zoom-in">
          I am a passionate MERN stack developer with expertise in building
          robust and dynamic websites.I thoroughly enjoy the process of creating
          captivating web experiences that combine seamless functionality with
          stunning design.
        </p>

        <p
          className="text-base text-gray-400 flex items-center gap-2"
          data-aos="zoom-in"
        >
          Phone: <span className="text-lightText">+8801796299483</span>
        </p>
        <p
          className="text-base text-gray-400 flex items-center gap-2"
          data-aos="zoom-in"
        >
          Email:{" "}
          <span className="text-lightText" data-aos="zoom-in">
            airinrahatprome@gmail.com
          </span>
        </p>
        <p
          className="text-base text-gray-400 flex items-center gap-2"
          data-aos="zoom-in"
        >
          Github:{" "}
          <span className="text-lightText">https://github.com/airinrahat</span>
        </p>
      </div>

      <div className="flex flex-col gap-0" data-aos="zoom-in">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/airinrahat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="airinrahatprome@gmail.com">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/airin-rahat-prome-8a79322a4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
