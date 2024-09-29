"use client";
import React, { useEffect, useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import PorofileLogoLight from "../icons/PorofileLogoLight";
import ProfileLogoDark from "../icons/ProfileLogoDark";
import Link from "next/link";
import { useLayoutStore } from "@/stores/LayoutStore";
import { LocalStorageKeys } from "@/core/model/LocalStorageKeys.enum";

const Navbar = () => {
  const layoutState = useLayoutStore();
  const [themeMode, setThemeMode] = useState(layoutState.appTheme);

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDark = () => {
    const theme = layoutState.appTheme;
    layoutState.appTheme === "light"
      ? layoutState.setAppTheme("dark")
      : layoutState.setAppTheme("light");
    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        LocalStorageKeys.APP_THEME,
        theme === "light" ? "dark" : "light"
      );

      theme === "dark"
        ? window.document.body.classList.add("dark")
        : window.document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    const init = async () => {
      const { Collapse, initTE } = await import("tw-elements");
      initTE({ Collapse }, { allowReinits: true });
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav
        className="sticky top-0 z-50 flex w-full flex-nowrap items-center justify-between bg-gray-50 py-2 text-xl  text-gray-500 hover:text-gray-700 focus:text-gray-600 dark:bg-gray-900 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <div className="mx-2">
            <a className="text-xl text-gray-100" href="#">
              {themeMode === "light" ? <ProfileLogoDark /> : <PorofileLogoLight />}
            </a>
          </div>
          <button
            className="block border-0 bg-transparent px-2 text-gray-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-gray-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContent2"
            aria-controls="navbarSupportedContent2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-end lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent2"
            data-te-collapse-item
          >
            <ul
              className="list-style-none flex flex-col pl-0 lg:mt-1 lg:flex-row"
              data-te-navbar-nav-ref
            >
              <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                <a
                  className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-gray-400
                  scale-0  hover:scale-75 hover:transition hover:ease-in-out hover:duration-300
                  "
                  aria-current="page"
                  data-te-nav-link-ref
                  onClick={() => handleClickScroll("profileHeaderId")}
                >
                  About
                </a>
              </li>
              <li className="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                <a
                  className="p-0 text-gray-500 transition duration-200 hover:text-gray-700 hover:ease-in-out focus:text-gray-700 disabled:text-black/30 motion-reduce:transition-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-gray-400"
                  aria-current="page"
                  data-te-nav-link-ref
                  onClick={() => handleClickScroll("skillId")}
                >
                  Skills
                </a>
              </li>
              <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                <a
                  className="p-0 text-gray-500 transition duration-200 hover:text-gray-700 hover:ease-in-out focus:text-gray-700 disabled:text-black/30 motion-reduce:transition-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-gray-400"
                  onClick={() => handleClickScroll("experinceId")}
                  data-te-nav-link-ref
                  aria-current="page"
                >
                  Work
                </a>
              </li>
              <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                <a
                  className="p-0 text-gray-500 transition duration-200 hover:text-gray-700 hover:ease-in-out focus:text-gray-700 disabled:text-black/30 motion-reduce:transition-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-gray-400"
                  onClick={() => handleClickScroll("testimonialId")}
                  data-te-nav-link-ref
                  aria-current="page"
                >
                  Testimonial
                </a>
              </li>
              <li className="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                <a
                  className="p-0 text-gray-500 transition duration-200 hover:text-gray-700 hover:ease-in-out focus:text-gray-700 disabled:text-black/30 motion-reduce:transition-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-gray-400"
                  onClick={() => handleClickScroll("contactId")}
                  data-te-nav-link-ref
                  aria-current="page"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div
              className="md:mx-4 sm:my-2 sm:mx-0 cursor-pointer"
              onClick={toggleDark}
            >
              {layoutState.appTheme === "light" ? <BiMoon /> : <BiSun />}
            </div>
            <button className="inline-block rounded bg-gray-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-gray-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-gray-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-gray-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-gray-100 dark:text-gray-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-gray-600 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-gray-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-gray-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]">
              <Link href={"./pdf/ahmed_hassan_cv.pdf"} download target="_blank">
                Download CV
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
