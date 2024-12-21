import React from "react";
import { BiLogoGithub, BiLogoFacebook, BiLogoLinkedinSquare } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="bg-white text-center text-gray-600 dark:bg-gray-900 dark:text-gray-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-gray-200 p-6 dark:border-gray-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with me on social networks:</span>
        </div>

        <div className="flex justify-center">
          <a href="#!" className="mr-6 text-gray-600 dark:text-gray-200 text-xl">
            <BiLogoFacebook />
          </a>
          <a href="#!" className="mr-6 text-gray-600 dark:text-gray-200 text-xl">
            <BiLogoLinkedinSquare />
          </a>
          <a href="#!" className="text-gray-600 dark:text-gray-200 text-xl">
            <BiLogoGithub />
          </a>
        </div>
      </div>

      <div className="bg-gray-200 p-6 sm:p-3 text-center dark:bg-gray-800 sm:text-xs text-sm">
        <span>© 2023 Copyright: </span>
        <a className="font-medium text-gray-600 dark:text-gray-400" href="#">
          Designed by ahmed hassan
        </a>
      </div>
    </footer>
  );
};

export default Footer;
