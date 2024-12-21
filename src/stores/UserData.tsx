import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUserDataState {
  userData: {
    userId: number;
    accessToken: string;
    name: string;
  } | null;

  setUserData: (
    // eslint-disable-next-line no-unused-vars
    data: {
      userId: number;
      accessToken: string;
      name: string;
    } | null,
  ) => void;
}

const initialState = {
  userData: null,
};

export const useUserDataStore = create<IUserDataState>()(
  persist(
    set => ({
      ...initialState,
      setUserData: userData => set(() => ({ userData })),

      reset: () => set(initialState),
    }),
    {
      name: "userData", // name of the item in the storage (must be unique)
    },
  ),
);
