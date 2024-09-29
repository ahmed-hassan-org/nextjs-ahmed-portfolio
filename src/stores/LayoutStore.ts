"use client";
import { LocalStorageKeys } from "@/core/model/LocalStorageKeys.enum";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ThemeData = "light" | "dark";

interface ILayoutState {
  showHeader: boolean;
  showFooter: boolean;
  appTheme: ThemeData;
}

interface ILayoutActions {
  /** @description update layout state */
  updateLayout: (state: ILayoutState) => void;
  setAppTheme: (state: ThemeData) => void;
}

/** @description main app auth store to get and set auth state for hr app  */
export const useLayoutStore = create(
  persist<ILayoutState & ILayoutActions>(
    (set, get) => ({
      showFooter: true,
      showHeader: true,
      appTheme:
        typeof window !== "undefined"
          ? (localStorage.getItem(LocalStorageKeys.APP_THEME) as ThemeData)
          : "light",

      updateLayout: state => {
        set({ ...state });
      },

      setAppTheme: (state: ThemeData) => {
        set({ appTheme: state });
      },
    }),
    {
      name: "portfolio-layout-state",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
