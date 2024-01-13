import Image from "next/image";
import React from "react";
import {
  BiMap,
  BiMessage,
  BiLogoGithub,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";
import pic from "../../../public/images/ahmedhassan.png";
import AboutmeCard from "./AboutmeCard";
import { Resend } from "resend";
const ProfileHeader = () => {
  const sendEmail = async () => {
    const resend = new Resend("re_NaZXSXSb_SSB1XFbCjvLkhUZgLLSAeRtQ");
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "GET",
      });
      console.log(await data.json());

      const res = await resend.emails.send({
        from: "messi10010@gmail.com",
        to: "ahmedmedodev@gmail.com",
        subject: "tes resend email",
        html: "<h1>hello</h1>",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(res);
    } catch (error) {
      console.log("an error heer ");
      console.log("email not sent");
    }
  };
  return (
    <>
      <section
        className="container grid grid-cols-3 md:h-[550px] gap-4 sm:mb-10 dark:bg-gray-900 sm:pt-10"
        id="profileHeaderId"
      >
        <div className="sm:col-span-3 sm:order-2 md:col-span-2 md:order-1 md:px-8 sm:mt-6 justify-self-center flex flex-col justify-center">
          <h1 className="m-0 text-4xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            Hi, I'm Ahmed Hassan
            <span className="text-5xl sm:text-3xl">👋</span>
          </h1>
          <p className=" mt-2 font-light text-gray-900 dark:text-gray-200 text-base sm:text-xs">
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
              <h3 className="m-0 text-lg text-gray-600 dark:text-gray-200 sm:text-base">
                Cairo, Egypt.
              </h3>
            </div>
            <div className="location-item flex flex-row w-2/4 flex-1 mt-2">
              <span className="mr-2 mt-1">
                <BiMessage className="text-gray-900 dark:text-gray-300" />
              </span>
              <h3 className="m-0 text-lg text-gray-600 dark:text-gray-200 sm:text-base">
                ahmedmedodev@gmail.com
              </h3>
            </div>
          </div>
          <div className="social-section md:mt-4 sm:mb-3">
            <div className="flex flex-row">
              <span className=" text-2xl sm:text-lg">
                <BiLogoGithub className="text-gray-900 dark:text-gray-300" />
              </span>
              <span className="mx-3 text-2xl sm:text-lg">
                <BiLogoTwitter className="text-gray-900 dark:text-gray-300" />
              </span>
              <span className="text-2xl sm:text-lg">
                <BiLogoLinkedin className="text-gray-900 dark:text-gray-300" />
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 md:order-2 sm:col-span-3 sm:order-1 md:px-3 sm:self-center  sm:justify-self-center">
          <div className="img-section md:w-[320px] sm:w-[230px] md:h-[300px] sm:h-[250px] relative">
            <div className="relative bg-gray-200 md:w-[250px] sm:w-[240px] md:h-[280px] sm:h-[240px] z-10 dark:bg-gray-400"></div>
            <Image
              src={pic}
              alt="logo"
              loading="lazy"
              className="absolute top-[-8%] left-[-10%] sm:left-[5px] md:w-[250px] sm:w-[230px] md:h-[300px] sm:h-[250px] object-contain z-20"
            />
          </div>
        </div>
        <div className="col-span-full">
          <button
            type="button"
            className="p-2 rounded-md text-green-800 bg-green-200 shadow-md"
            onClick={sendEmail}
          >
            Send Email
          </button>
        </div>
      </section>
      <AboutmeCard />
    </>
  );
};

export default ProfileHeader;
