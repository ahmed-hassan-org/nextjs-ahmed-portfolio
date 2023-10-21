import React from "react";
import {
  BiLogoGithub,
  BiLogoFacebook,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with me on social networks:</span>
        </div>

        <div className="flex justify-center">
          <a
            href="#!"
            className="mr-6 text-neutral-600 dark:text-neutral-200 text-xl"
          >
            <BiLogoFacebook />
          </a>
          <a
            href="#!"
            className="mr-6 text-neutral-600 dark:text-neutral-200 text-xl"
          >
            <BiLogoLinkedinSquare />
          </a>
          <a
            href="#!"
            className="text-neutral-600 dark:text-neutral-200 text-xl"
          >
            <BiLogoGithub />
          </a>
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright: </span>
        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="#"
        >
          Designed by ahmed hassan
        </a>
      </div>
    </footer>
  );
};

export default Footer;
