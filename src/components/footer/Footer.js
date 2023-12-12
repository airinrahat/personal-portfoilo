import React from "react";
import {
  FiGithub,
  // FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FiGlobe />,
      url: "https://airinrahat.netlify.app/",
    },
    {
      id: 2,
      icon: <FiGithub />,
      url: "https://github.com/airinrahat",
    },
    // {
    //   id: 3,
    //   icon: <FiTwitter />,
    //   url: "https://twitter.com/sajjat_rahman",
    // },
    {
      id: 4,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/airin-rahat-prome-8a79322a4/",
    },
    {
      id: 5,
      icon: <FiYoutube />,
      url: "www.youtube.com/@airinrahatprome6996",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            Follow me
          </p>
          <ul className="flex gap-1 lg:gap-5 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                data-aos="zoom-in"
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
