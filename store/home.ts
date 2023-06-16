import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  curEmail: string | null;
};

type Action = {
  fetchEmail: () => void;
  setState: (state: State) => void;
};

export const useHomeStore = create<State & Action>()(
  persist(
    (set) => ({
      curEmail: null,
      fetchEmail: async () => {
        const res = await fetch("/api/temp-email?email=111", {
          method: "GET",
        }).then((res) => res.json());
        console.log("res", res);
        // const data = await res.json();
        // set({ curEmail: data.email });
      },
      setState: (state: State) => set(state),
    }),
    {
      name: "home",
    }
  )
);
