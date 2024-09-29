import {
  LocalStorageKeys,
  SupportedTheme,
} from "@/core/model/LocalStorageKeys.enum";
import { useLayoutStore } from "@/stores/LayoutStore";
import "@/styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "tw-elements/dist/css/tw-elements.min.css";
function App({ Component, pageProps }: AppProps) {
  const layoutState = useLayoutStore();

  useEffect(() => {
    // check for theme
    if (
      typeof window !== "undefined" &&
      !localStorage.getItem(LocalStorageKeys.APP_THEME)
    ) {
      window.localStorage.setItem(LocalStorageKeys.APP_THEME, layoutState.appTheme);
      layoutState.appTheme === "dark"
        ? window.document.body.classList.add("dark")
        : window.document.body.classList.remove("dark");
    } else {
      localStorage.getItem(LocalStorageKeys.APP_THEME) === "light"
        ? layoutState.setAppTheme(SupportedTheme.THEME_LIGHT)
        : layoutState.setAppTheme(SupportedTheme.THEME_DARK);
      layoutState.appTheme === "dark"
        ? window.document.body.classList.add("dark")
        : window.document.body.classList.remove("dark");
    }
  }, []);

  return (
    <main suppressHydrationWarning>
      <div className="flex flex-col min-h-screen w-full bg-gray text-gray-950 dark:bg-gray-800 dark:text-amber-500">
        <Component {...pageProps} />
        <ToastContainer />
      </div>
    </main>
  );
}

export default appWithTranslation(App);
