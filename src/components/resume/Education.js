import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full  grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-10"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2018 - Running
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational Qualification
          </h2>
        </div>
        <div
          className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"
          data-aos="fade-right"
        >
          <ResumeCard
            title="BBA 4th Year"
            subTitle="Gurudayal Govt Collage,Kishoregonj,Dhaka"
            result="Ongoing"
            des="Studied  related subject:Accounting"
          />
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2011 - 2016</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div
          className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"
          data-aos="fade-left"
        >
          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Business studies"
            result="complate"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div
          className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"
          data-aos="fade-left"
        >
          <ResumeCard
            title="Complete Web Development Course With Jhankar Mahbub"
            subTitle="Progamming Hero - ( 29/12/2022 - Running )"
            result="Online"
            des="Learnt MERN stack and made various project using the skills in this course. Check out my Github for project info !"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
