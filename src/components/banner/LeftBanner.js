/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "Data Scientist.",
      "Wildlife Enthusiast Capturing Wonders Through My Lens 📸",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal" data-aos="fade-right">
          Hola Amingos 👀🙋‍♂️{" "}
        </h4>
        <h1 className="text-5xl font-bold text-white" data-aos="fade-right">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Airin Rahat Promi</span>
        </h1>
        <h2 className="text-3xl font-bold text-white" data-aos="fade-right">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p
          className="text-base font-bodyFont leading-6 tracking-wide"
          data-aos="fade-right"
        >
          "I am a passionate MERN stack developer and machine learning
          enthusiast. With a strong foundation in web development and a keen eye
          for data, I create innovative solutions that bridge technology and
          user experience."
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
