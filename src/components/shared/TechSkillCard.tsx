import React from "react";
import Image from "next/image";
import jsIcon from "../icons/icon-javscript.svg";
import tsIcon from "../icons/icon-typescript.svg";
import reactIcon from "../icons/icon-react.svg";
import nextIcon from "../icons/icon-nextjs.svg";
import nodeIcon from "../icons/icon-nodejs.svg";
import expressIcon from "../icons/icon-express.svg";
import nestjsIcon from "../icons/icon-nest.svg";
import socketIcon from "../icons/icon-socket.svg";
import postgresIcon from "../icons/icon-postgresql.svg";
import mongoIcon from "../icons/icon-mongodb.svg";
import sassIcon from "../icons/icon-sass.svg";
import tailwindcssIcon from "../icons/icon-tailwindcss.svg";
import figmaIcon from "../icons/icon-figma.svg";
import cypressIcon from "../icons/icon-cypress.svg";
import storybookIcon from "../icons/icon-storybook.svg";
import gitIcon from "../icons/icon-git.svg";

const TechSkillCard = () => {
  return (
    <section
      className="container skill-section-wrapper relative grid grid-cols-4 mt-24 sm:mt-4 mb-4 sm:mb-2"
      id="skillId"
    >
      <div className="col-span-4 flex flex-row justify-center items-center pb-10">
        <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-gray-200 px-3 py-2 text-center align-baseline text-[0.75em] font-bold leading-none text-gray-600">
          Skills
        </span>
      </div>
      <div className="col-span-4 mt-5 mb-10">
        <div className="grid md:grid-cols-8 sm:grid-cols-3 md:gap-10 sm:gap-2">
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={jsIcon} alt="js" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Javascript
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={tsIcon} alt="ts" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Typescript
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={reactIcon} alt="react" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              React
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={nextIcon} alt="nextjs" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Next.js
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={nodeIcon} alt="nodeIcon" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Node.js
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={expressIcon} alt="expressIcon" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Express.js
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={nestjsIcon} alt="nestjsIcon" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Nest.js
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={socketIcon} alt="socketIcon" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Socket.io
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={postgresIcon} alt="postgresIcon" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              PostgreSQL
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={mongoIcon} alt="mongoIcon" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              MongoDB
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={sassIcon} alt="sassIcon" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Sass/Scss
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={tailwindcssIcon} alt="tailwindcssIcon" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Tailwind
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={figmaIcon} alt="figmaIcon" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Figma
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={cypressIcon} alt="cypressIcon" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Cypress
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={storybookIcon} alt="storybookIcon" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Storybook
            </h6>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center">
            <Image src={gitIcon} alt="gitIcon" />
            <h6 className="m-0 text-sm font-light text-gray-600 dark:text-gray-100 mt-2">
              Git
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkillCard;
