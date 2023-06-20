import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TempEmailType } from "@/utils/constant";
import { message } from "antd";

type State = {
  currentEmail: string | null;
  emailType: TempEmailType;
  mailingList: any[];
};

type Action = {
  createEmail: () => void;
  getEmailList: () => void;
};

export const useHomeStore = create<State & Action>()(
  persist(
    (set, get) => ({
      currentEmail: null,
      emailType: TempEmailType.TempEmail_ALTMAILS,
      mailingList: [],
      createEmail: async () => {
        const emailType = get().emailType;
        const response = await fetch(`/api/${emailType}`, {
          method: "POST",
        }).then((res) => res.json());
        if (response.code === 0) {
          set({ currentEmail: response.result });
        }else{
          message.error(response.error);
        }
      },
      getEmailList: async () => {
        const { emailType, currentEmail } = get();
        const res = await fetch(`/api/${emailType}?email=${currentEmail}`, {
          method: "GET",
        }).then((res) => res.json());
        if (res.code === 0) {
          set({ mailingList: res.result });
        }else{
          message.error(res.error);
        }
      },
    }),
    {
      name: "home",
      version: 1,
    }
  )
);
