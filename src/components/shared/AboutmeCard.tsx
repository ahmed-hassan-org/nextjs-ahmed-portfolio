import React from "react";
import Image from "next/image";
import pic2 from "../icons/Pic2.svg";

const AboutmeCard = () => {
  return (
    <section
      className="container aboutme-section-wrapper relative grid grid-cols-3 mt-24 mb-16 sm:mb-0 md:gap-4 sm:gap-2"
      id="aboutmeId"
    >
      <div className="col-span-3 flex flex-row justify-center items-center pb-10">
        <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-gray-200 px-3 py-2 text-center align-baseline text-[0.75em] font-bold leading-none text-gray-600">
          About me
        </span>
      </div>
      <div className="md:col-span-1 md:order-2 sm:col-span-3 sm:order-1 sm:self-center sm:justify-self-center">
        <div className="img-section w-[320px] h-[360px] relative mt-5">
          <div className="relative bg-gray-200 w-[320px] h-[360px] z-10 dark:bg-gray-400"></div>
          <Image
            src={pic2}
            alt="logo2"
            className="absolute top-[-5%] left-[-4%] w-[320px] h-[360px] object-contain z-20"
          />
        </div>
      </div>
      <div className="md:col-span-2 sm:col-span-3 sm:order-2 sm:mb-10 px-16 sm:px-4">
        <h1 className="text-gray-900 text-2xl sm:text-base font-semibold dark:text-gray-200">
          Curious about me? Here you have it:
        </h1>
        <p className="text-sm sm:text-xs font-light text-gray-600 mt-4 dark:text-gray-300">
          I'm a passionate, self-proclaimed designer who specializes in full
          stack development (React.js & Node.js). I am very enthusiastic about
          bringing the technical and visual aspects of digital products to life.
          User experience, pixel perfect design, and writing clear, readable,
          highly performant code matters to me.
        </p>
        <p className="text-sm sm:text-xs font-light text-gray-600 mt-2 dark:text-gray-300">
          I began my journey as a web developer in 2015, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. Now, in my early
          thirties, 7 years after starting my web development journey, I'm
          building cutting-edge web applications using modern technologies such
          as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
        </p>
        <p className="text-sm sm:text-xs font-light text-gray-600 mt-2 dark:text-gray-300">
          I am very much a progressive thinker and enjoy working on products end
          to end, from ideation all the way to development.
        </p>
        <p className="text-sm sm:text-xs font-light text-gray-600 mt-2 dark:text-gray-300">
          When I'm not in full-on developer mode, you can find me hovering
          around on twitter or on indie hacker, witnessing the journey of early
          startups or enjoying some free time. You can follow me on Twitter
          where I share tech-related bites and build in public, or you can
          follow me on GitHub.
        </p>
        <div className="w-full mt-5 grid grid-cols-2 gap-3">
          <div className="col-span-1">
            <ul className="flex flex-col list-disc">
              <li className="flex-1">
                <h4 className="text-base sm:text-xs">
                  B.E Information Technology
                </h4>
              </li>
              <li className="flex-1">
                <h4 className="text-base sm:text-xs">Fulltime work</h4>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="flex flex-col list-disc">
              <li className="flex-1">
                <h4 className="text-base sm:text-xs">Freelancer, part time</h4>
              </li>
              <li className="flex-1">
                <h4 className="text-base sm:text-xs">Work by project</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutmeCard;
