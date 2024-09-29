import Providers from "@/providers/Providers";
import "@/styles/globals.scss";
import "swiper/css";
import "swiper/css/navigation";
import "react-toastify/dist/ReactToastify.css";
import "tw-elements/dist/css/tw-elements.min.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { appWithTranslation } from "next-i18next";
import { useEffect } from "react";
import {
  LocalStorageKeys,
  SupportedTheme,
} from "@/core/model/LocalStorageKeys.enum";
import { useLayoutStore } from "@/stores/LayoutStore";
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
