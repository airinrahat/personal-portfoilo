import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2021 - Running
          </p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div
          className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"
          data-aos="fade-right"
        >
          <ResumeCard
            title="No company"
            subTitle="Practice experience"
            result="Online"
            des="I have 1.5 years of experience of web design and development, learnt MERN stack development for 6 month, learnig Back end currently and made various projects with my skills."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
