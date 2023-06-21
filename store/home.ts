import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TempEmailType } from "@/utils/constant";
import { message } from "antd";

type State = {
  currentEmail: string | null;
  emailType: TempEmailType;
  mailingList: any[];
  mailContent: string;
  createEmailLoading: boolean;
  mailingListLoading: boolean;
  mailContentLoading: boolean;
};

type Action = {
  createEmail: () => void;
  getEmailList: () => void;
  viewEmail: (mailId: string) => void;
};

export const useHomeStore = create<State & Action>()(
  persist(
    (set, get) => ({
      currentEmail: null,
      emailType: TempEmailType.TempEmail_ALTMAILS,
      mailingList: [],
      mailContent: "<span></span>",
      createEmailLoading: false,
      mailingListLoading: false,
      mailContentLoading: false,
      createEmail: async () => {
        const emailType = get().emailType;
        set({ createEmailLoading: true });
        const response = await fetch(`/api/${emailType}`, {
          method: "POST",
        }).then((res) => res.json());
        if (response.code === 0) {
          set({ currentEmail: response.result, createEmailLoading: false });
        } else {
          set({ createEmailLoading: false });
          message.error(response.error);
        }
      },
      getEmailList: async () => {
        const { emailType, currentEmail } = get();
        set({ mailingListLoading: true });
        const res = await fetch(`/api/${emailType}?email=${currentEmail}`, {
          method: "GET",
        }).then((res) => res.json());
        if (res.code === 0) {
          set({ mailingList: res.result, mailingListLoading: false });
        } else {
          set({ mailingListLoading: false });
          message.error(res.error);
        }
      },
      viewEmail: async (mailId) => {
        const { emailType } = get();
        set({ mailContentLoading: true });
        const res = await fetch(`/api/${emailType}?mailId=${mailId}`, {
          method: "PUT",
        }).then((res) => res.json());
        if (res.code === 0) {
          set({ mailContent: res.result, mailContentLoading: false });
        } else {
          set({ mailContentLoading: false });
          message.error(res.error);
        }
      },
    }),
    {
      name: "home",
      version: 2,
    }
  )
);
