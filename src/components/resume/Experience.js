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
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div
          className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"
          data-aos="fade-right"
        >
          <ResumeCard
            title="Complete Web Development"
            subTitle="Programing-Hero ( Jul 2023 - Dec 2023 )"
            result={
              <a
                href="/certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Certificate
              </a>
            }
            des="I learned everything needed to become a serious web developer. Starting from HTML, CSS, I learned JavaScript, Git, ES6, REST API, Server, JSON, etc. Not only that, I also learned ReactJS, Node, MongoDB, Debugging, and many more. We built 11 websites as projects including assignments."
          />

          <ResumeCard
            title="Professional Web-design and Wordpress theme customization. 
"
            subTitle="UY Lab"
            result="Success"
            des="With 2.5 years of experience in web design and development, I have completed several professional projects. I have also completed a 6-month MERN stack development course and am currently expanding my backend knowledge. Throughout this journey, I've built multiple real-world projects by applying my skills effectively."
          />
          <ResumeCard
            title="Presentation & Public Speaking 
"
            subTitle="10 Minute School"
            result={
              <a
                href="/presentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Certificate
              </a>
            }
            des="This course helped me improve my communication skills, build confidence in public speaking, and learn how to effectively present ideas in front of an audience using proper tone, body language, and storytelling techniques."
          />
          <ResumeCard
            title="Communication Secrets
 
"
            subTitle="10 Minute School"
            result={
              <a
                href="/communation-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Certificate
              </a>
            }
            des="This course helped me develop strong communication skills by teaching how to express ideas clearly, listen actively, handle conversations confidently, and build better personal and professional relationships."
          />
          {/* <ResumeCard
            title="Successful completion of Web-Design 
"
            subTitle="Digital IT Institute"
            result="Success"
            des="Completed a foundational course in web design, gaining hands-on experience with HTML, CSS, and responsive layouts."
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
