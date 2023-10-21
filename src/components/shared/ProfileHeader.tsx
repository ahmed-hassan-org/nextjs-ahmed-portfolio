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
        className="grid grid-cols-3 md:h-[350px] md:mt-[100px] gap-4 sm:mt-10 sm:mb-10"
        id="profileHeaderId"
      >
        <div className="sm:col-span-3 sm:order-2 md:col-span-2 md:order-1 px-8">
          <h1 className="m-0 text-4xl font-bold text-gray-900">
            Hi, I'm Ahmed Hassan <span className="text-5xl">👋</span>
          </h1>
          <p className=" mt-2 font-light text-gray-900">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="address-section my-5 flex flex-col">
            <div className="location-item flex flex-row w-2/4 flex-1">
              <span className="mr-2 mt-1">
                <BiMap />
              </span>
              <h3 className="m-0 text-lg text-gray-600">Cairo, Egypt.</h3>
            </div>
            <div className="location-item flex flex-row w-2/4 flex-1 mt-2">
              <span className="mr-2 mt-1">
                <BiMessage />
              </span>
              <h3 className="m-0 text-lg text-gray-600">
                messi10010@gmail.com
              </h3>
            </div>
          </div>
          <div className="social-section mt-4">
            <div className="flex flex-row">
              <span className=" text-2xl">
                <BiLogoGithub />
              </span>
              <span className="mx-3 text-2xl">
                <BiLogoTwitter />
              </span>
              <span className="text-2xl">
                <BiLogoLinkedin />
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 md:order-2 sm:col-span-3  sm:order-1 px-3">
          <div className="img-section md:w-[320px] sm:w-[230px] md:h-[360px] sm:h-[300px] relative">
            <div className="relative bg-gray-200 md:w-[320px] sm:w-[230px] md:h-[360px] sm:h-[270px] z-10"></div>
            <Image
              src={pic}
              alt="log"
              className="absolute top-[-8%] left-[-10%] md:w-[320px] sm:w-[230px] md:h-[360px] sm:h-[300px] object-contain z-20"
            />
          </div>
        </div>
      </section>
      <AboutmeCard />
    </>
  );
};

export default ProfileHeader;
