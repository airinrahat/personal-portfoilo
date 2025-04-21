/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "React & Next.js Developer.",

      "MERN Stack Explorer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-white" data-aos="fade-right">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Ayrin Rahat Promi</span>
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
          "I am a passionate MERN stack developer with a strong foundation in
          web development. I enjoy building responsive, user-friendly web
          applications and continuously learning new technologies to improve
          user experience and functionality."
        </p>
      </div>

      <Media />
    </div>
  );
};

export default LeftBanner;
