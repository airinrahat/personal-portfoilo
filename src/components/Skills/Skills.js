/* eslint-disable no-unused-vars */
import React from "react";
import Title from "../layouts/Title";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithubSquare,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Technical Skills" des="Skills" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-10">
        <div className="bannerIcon w-40 h-40">
          <div>
            <FaHtml5 className="text-7xl inline" />
            <p className="block">HTML5</p>
          </div>
        </div>
        <div className="bannerIcon w-40 h-40">
          <div>
            <FaCss3Alt className="text-7xl" />
            <p className="block">Css3</p>
          </div>
        </div>
        <div className="bannerIcon w-40 h-40">
          <div>
            <FaBootstrap className="text-7xl inline" />
            <p className="block">Bootstrap</p>
          </div>
        </div>
        <div className="bannerIcon w-40 h-40">
          <div className="text-center">
            <SiTailwindcss className="text-7xl inline" />
            <p className="block">Tailwindcss</p>
          </div>
        </div>
        <div className="bannerIcon w-40 h-40">
          <div className="text-center">
            <FaJsSquare className="text-7xl inline" />
            <p className="block">JS</p>
          </div>
        </div>
        <div className="bannerIcon w-40 h-40">
          <div className="text-center">
            <FaReact className="text-7xl inline" />
            <p className="block">React</p>
          </div>
        </div>

        <div className="bannerIcon w-40 h-40">
          <div>
            <SiFirebase className="text-7xl inline" />
            <p className="block">FIrebase</p>
          </div>
        </div>
        <div className="bannerIcon w-40 h-40">
          <div>
            <FaNodeJs className="text-7xl" />
            <p className="block">Node Js</p>
          </div>
        </div>
        <div className="bannerIcon w-40 h-40">
          <div>
            <SiExpress className="text-7xl inline" />
            <p className="block">Express Js</p>
          </div>
        </div>
        <div className="bannerIcon w-40 h-40">
          <div className="text-center">
            <SiMongodb className="text-7xl inline" />
            <p className="block">Mongo DB</p>
          </div>
        </div>
        <div className="bannerIcon w-40 h-40">
          <div className="text-center">
            <FaGithubSquare className="text-7xl inline" />
            <p className="block">Github</p>
          </div>
        </div>
        <div className="bannerIcon w-40 h-40">
          <div className="text-center">
            <SiNextdotjs className="text-7xl inline" />
            <p className="block">Next Js</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
