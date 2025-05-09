import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";

import { navLinksdata } from "../../constants";
import { FiArrowDownCircle } from "react-icons/fi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" h-24 sticky top-0 z-50 bg-bodyColor  flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 max-w-screen-xl mx-auto">
      <div>
        <img
          src="https://i.ibb.co/Tr03QX0/coverpic4.jpg"
          alt="logo"
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
          }}
        />
      </div>

      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img
                  className="w-32"
                  src="https://i.ibb.co/Tr03QX0/coverpic4.jpg"
                  alt="logo"
                />
                <p className="text-sm text-gray-400 mt-2">
                  "I am a passionate MERN stack developer and machine learning
                  enthusiast. With a strong foundation in web development and a
                  keen eye for data, I create innovative solutions that bridge
                  technology and user experience."
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <SiGithub />
                  </span>
                  <span className="bannerIcon">
                    <SiGmail />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>

      <div>
        <a
          download="Resume-Ayrin-Rahat-Prome.pdf"
          href="/Resume-Ayrin-Rahat-Prome.pdf"
          className="flex justify-center items-center w-36 sm:w-60  text-lg   py-2 shadow-lg rounded-lg bg-indigo-50 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
          aria-label="Download Resume"
        >
          <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
