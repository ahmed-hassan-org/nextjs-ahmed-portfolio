import Providers from "@/providers/Providers";
import "@/styles/globals.scss";
import "swiper/css";
import "swiper/css/navigation";
import "react-toastify/dist/ReactToastify.css";
import "tw-elements/dist/css/tw-elements.min.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   // localStorage.setItem("color-theme", "light");
  //   if (
  //     localStorage.getItem("color-theme") === "dark" ||
  //     (!("color-theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, []);

  return (
    <main suppressHydrationWarning>
      <Providers>
        <div className="flex flex-col min-h-screen w-full bg-gray text-gray-950 dark:bg-gray-800 dark:text-amber-500">
          <Component {...pageProps} />
          <ToastContainer />
        </div>
      </Providers>
    </main>
  );
}

export default appWithTranslation(App);
