import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const ProjectsCard = ({
  title,
  features1,
  features2,
  features3,
  technology,
  des,
  src,
  githubClient,
  githubServer,
  websiteLink,
}) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="">
            <h2 className="text-xl uppercase text-designColor font-normal mb-1">
              {title}
            </h2>

            <div>
              <h3 className="text-lg">
                <b>Description :</b>
              </h3>
              <p className="text-sm tracking-wide mb-3 hover:text-gray-100 duration-300">
                {des}
              </p>
            </div>

            <div>
              <h3 className="text-lg">
                <b>Features :</b>
              </h3>
              <ul>
                <li>1. {features1}</li>
                <li>2. {features2}</li>
                <li>3. {features3}</li>
              </ul>
            </div>

            <div className="py-4">
              <h3 className="text-lg">
                <b>Technology :</b>
              </h3>
              <p>{technology}</p>
            </div>

            <div className="flex gap-10">
              <div className="text-center">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <a
                    href={githubClient}
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
                    href={githubServer}
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
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe />
                  </a>
                </span>
                <p>Live site</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
