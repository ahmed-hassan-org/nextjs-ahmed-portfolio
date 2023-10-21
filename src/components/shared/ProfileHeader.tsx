import Image from "next/image";
import React from "react";
import {
  BiMap,
  BiMessage,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";
import pic from "../icons/Pic.svg";
import AboutmeCard from "./AboutmeCard";

const ProfileHeader = () => {
  return (
    <>
      <section
        className="container grid grid-cols-3 md:h-[550px] gap-4 sm:mb-10 dark:bg-gray-900"
        id="profileHeaderId"
      >
        <div className="sm:col-span-3 sm:order-2 md:col-span-2 md:order-1 px-8 justify-self-center flex flex-col justify-center">
          <h1 className="m-0 text-4xl font-bold text-gray-900 dark:text-gray-100">
            Hi, I'm Ahmed Hassan <span className="text-5xl">👋</span>
          </h1>
          <p className=" mt-2 font-light text-gray-900 dark:text-gray-200">
            I'm a Software Engineer based in Egypt ☀️. I describe myself as a
            passionate developer who loves coding, open source, and the web
            platform ❤️.I teach my self front end technologies and i prefer to
            use Angular as primary framework in work and then react,
            react-native or flutter, i like to learn new technologie and have a
            deep knowledge in my fied, also i have a good experinses in database
            and sql and backend using nodejs express , nestjs , java spring boot
            and python for web and data analysis
          </p>
          <div className="address-section my-5 flex flex-col">
            <div className="location-item flex flex-row w-2/4 flex-1">
              <span className="mr-2 mt-1">
                <BiMap className="text-gray-900 dark:text-gray-300" />
              </span>
              <h3 className="m-0 text-lg text-gray-600 dark:text-gray-200">
                Cairo, Egypt.
              </h3>
            </div>
            <div className="location-item flex flex-row w-2/4 flex-1 mt-2">
              <span className="mr-2 mt-1">
                <BiMessage className="text-gray-900 dark:text-gray-300" />
              </span>
              <h3 className="m-0 text-lg text-gray-600 dark:text-gray-200">
                ahmedmedodev@gmail.com
              </h3>
            </div>
          </div>
          <div className="social-section mt-4">
            <div className="flex flex-row">
              <span className=" text-2xl">
                <BiLogoGithub className="text-gray-900 dark:text-gray-300" />
              </span>
              <span className="mx-3 text-2xl">
                <BiLogoTwitter className="text-gray-900 dark:text-gray-300" />
              </span>
              <span className="text-2xl">
                <BiLogoLinkedin className="text-gray-900 dark:text-gray-300" />
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 md:order-2 sm:col-span-3  sm:order-1 px-3 sm:self-center  sm:justify-self-center">
          <div className="img-section md:w-[320px] sm:w-[230px] md:h-[360px] sm:h-[300px] relative">
            <div className="relative bg-gray-200 md:w-[320px] sm:w-[240px] md:h-[360px] sm:h-[270px] z-10 dark:bg-gray-400"></div>
            <Image
              src={pic}
              alt="logo"
              className="absolute top-[-8%] left-[-10%] sm:left-[5px] md:w-[320px] sm:w-[230px] md:h-[360px] sm:h-[300px] object-contain z-20"
            />
          </div>
        </div>
      </section>
      <AboutmeCard />
    </>
  );
};

export default ProfileHeader;
