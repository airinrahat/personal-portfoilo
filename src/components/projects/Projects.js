/* eslint-disable no-unused-vars */
import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { FaAngleDown, FaGlobe } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Projects = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Check these out on my github" des="My Projects" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <div
          className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
          data-aos="zoom-in-right"
        >
          <div class="relative max-w-full h-72 overflow-hidden">
            <div class="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
              <img
                src={projectOne}
                alt="projectOneImg"
                class="w-full object-cover object-top "
              />
            </div>
          </div>

          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="">
                <h2 className="text-xl uppercase text-designColor font-normal mb-1">
                  Hostel-Management( Hostel Management site for a University )
                </h2>

                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={
                      <FaAngleDown className="text-gray-100 text-2xl" />
                    }
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    style={{
                      background: "rgb(33 36 40)",
                      color: "rgb(243 244 246)",
                    }}
                  >
                    <Typography>
                      <h2 className="text-xl">
                        <b>Project Details :</b>
                      </h2>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-bodyColor text-gray-100">
                    <Typography>
                      <div>
                        <h3 className="text-lg">
                          <b>Description :</b>
                        </h3>
                        <p className="text-sm mb-3 ">
                          A ML project using logistic regression to find out the
                          win probability of the chasing team in an IPL match.
                          Used Kaggle dataset from 2008-2019.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg">
                          <b>Features :</b>
                        </h3>
                        <ul>
                          <li>1. Admin, User 2 conditional dashboard.</li>
                          <li>2. Stripe card payment system.</li>
                          <li>3. Authentication and Authorization.</li>
                        </ul>
                      </div>

                      <div className="py-4">
                        <h3 className="text-lg">
                          <b>Technology :</b>
                        </h3>
                        <p>
                          Html, Css, Tailwind, JavaScript, React, Node, Express,
                          Mongodb with CRUD, firebase, Axios"
                        </p>
                      </div>

                      <div className="flex gap-10">
                        <div className="text-center">
                          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <a
                              href="https://github.com/airinrahat/hostel-manegement-client-side"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <BsGithub />
                            </a>
                          </span>
                          <p>Clinet side</p>
                        </div>

                        <div className="text-center">
                          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <a
                              href="https://github.com/airinrahat/hostel-manegement-server-side"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <BsGithub />
                            </a>
                          </span>
                          <p>Server side</p>
                        </div>

                        <div className="text-center">
                          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <a
                              href="https://hostel-management-79aab.web.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGlobe />
                            </a>
                          </span>
                          <p>Live site</p>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
          data-aos="zoom-in-left"
        >
          <div class="relative max-w-full h-72 overflow-hidden">
            <div class="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
              <img
                src={projectTwo}
                alt="projectTwoImg"
                class="w-full object-cover object-top "
              />
            </div>
          </div>

          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="">
                <h2 className="text-xl uppercase text-designColor font-normal mb-1">
                  Job World (Part-time,Remote,Hybrid,On-side):
                </h2>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={
                      <FaAngleDown className="text-gray-100 text-2xl" />
                    }
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    style={{
                      background: "rgb(33 36 40)",
                      color: "rgb(243 244 246)",
                    }}
                  >
                    <Typography>
                      <h2 className="text-xl">
                        <b>Project Details :</b>
                      </h2>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-bodyColor text-gray-100">
                    <Typography>
                      <div>
                        <h3 className="text-lg">
                          <b>Description :</b>
                        </h3>
                        <p className="text-sm tracking-wide mb-3 hover:text-gray-100 duration-300">
                          A ML project using logistic regression to find out the
                          win probability of the chasing team in an IPL match.
                          Used Kaggle dataset from 2008-2019.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg">
                          <b>Features :</b>
                        </h3>
                        <ul>
                          <li>
                            1. Added any job, your added job update / delete.
                          </li>
                          <li>2. All added job see only login users.</li>
                          <li>
                            3.Clicking on a job listing displays detailed
                            information about the job.
                          </li>
                        </ul>
                      </div>

                      <div className="py-4">
                        <h3 className="text-lg">
                          <b>Technology :</b>
                        </h3>
                        <p>
                          Html, Css, Tailwind,Daisy Ui, JavaScript, React, Node,
                          Express, Mongodb with CRUD, firebase.
                        </p>
                      </div>

                      <div className="flex gap-10">
                        <div className="text-center">
                          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <a
                              href="https://github.com/airinrahat/job-world-client-side"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <BsGithub />
                            </a>
                          </span>
                          <p>Clinet side</p>
                        </div>
                        <div className="text-center">
                          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <a
                              href="https://github.com/airinrahat/job-world-server-side"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <BsGithub />
                            </a>
                          </span>
                          <p>Server side</p>
                        </div>

                        <div className="text-center">
                          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <a
                              href="https://6578428ea104854a6e2cd7cf--event-managment-arp.netlify.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGlobe />
                            </a>
                          </span>
                          <p>Live site</p>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
          data-aos="zoom-in-right"
        >
          <div class="relative max-w-full h-72 overflow-hidden">
            <div class="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)]">
              <img
                src={projectThree}
                alt="projectThreeImg"
                class="w-full object-cover object-top "
              />
            </div>
          </div>
          <div className="w-full mt-5 flex flex-col  gap-6">
            <div>
              <div className="">
                <h2 className="text-xl uppercase text-designColor font-normal mb-1">
                  The-Wing-Stop (React Authentication)
                </h2>

                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={
                      <FaAngleDown className="text-gray-100 text-2xl" />
                    }
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    style={{
                      background: "rgb(33 36 40)",
                      color: "rgb(243 244 246)",
                    }}
                  >
                    <Typography>
                      <h2 className="text-xl">
                        <b>Project Details :</b>
                      </h2>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-bodyColor text-gray-100">
                    <Typography>
                      <div>
                        <h3 className="text-lg">
                          <b>Description :</b>
                        </h3>
                        <p className="text-sm tracking-wide mb-3 hover:text-gray-100 duration-300">
                          A ML project using logistic regression to find out the
                          win probability of the chasing team in an IPL match.
                          Used Kaggle dataset from 2008-2019.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg">
                          <b>Features :</b>
                        </h3>
                        <ul>
                          <li>1. Added 6 services card.</li>
                          <li>2. Toast added in my project.</li>
                          <li>
                            3. light and dark mode with responsive full website.
                          </li>
                        </ul>
                      </div>

                      <div className="py-4">
                        <h3 className="text-lg">
                          <b>Technology :</b>
                        </h3>
                        <p>
                          Html, Css, Bootstrap, JavaScript, React , Node ,
                          Express and Firebase Authentication.
                        </p>
                      </div>

                      <div className="flex gap-10">
                        <div className="text-center">
                          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <a
                              href="https://github.com/airinrahat/brand-shop-cilent-side"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <BsGithub />
                            </a>
                          </span>
                          <p>Clinet side</p>
                        </div>
                        <div className="text-center">
                          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <a
                              href="https://github.com/airinrahat/brand-shop-server-side"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <BsGithub />
                            </a>
                          </span>
                          <p>Server side</p>
                        </div>

                        <div className="text-center">
                          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                            <a
                              href="https://eloquent-basbousa-c90776.netlify.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGlobe />
                            </a>
                          </span>
                          <p>Live site</p>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
