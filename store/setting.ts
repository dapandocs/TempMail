import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  isAutoFresh: boolean;
};

type Action = {
  setState: (state: State) => void;
};

export const useSettingStore = create<State & Action>()(
  persist(
    (set) => ({
      isAutoFresh: false,
      setState: (state) => set(state),
    }),
    {
      name: "setting",
    }
  )
);
