import React from "react";
import { FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiGithub, SiNextdotjs } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div data-aos="zoom-in">
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
            <a
              href="https://www.linkedin.com/in/airin-rahat-prome-8a79322a4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://airinrahat.netlify.app/">
              <FiGlobe />
            </a>
          </span>
        </div>
      </div>
      <div data-aos="zoom-in">
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST WEB STACK
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiMongodb />
          </span>

          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
