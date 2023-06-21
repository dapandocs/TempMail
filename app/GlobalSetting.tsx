"use client";

import Navigation from "@/components/Navigation";
import { ConfigProvider } from "antd";

export default function GlobalSetting({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-t from-slate-900 to-slate-700 text-slate-100 font-mono min-h-screen">
      <Navigation />
      <div className="h-1 border-b border-b-slate-500/40 w-screen shadow-2xl mb-4 lg:mb-8" />
      <div className="pr-2 pl-2 lg:pr-0 lg:pl-0 pb-10">
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: "transparent",
              colorText: "#fff",
              colorTextHeading: "#fff",
              colorBorderSecondary: "rgb(244 245 249 / 0.2)",
              colorPrimaryHover: "#fff",
              colorBorder: "rgb(244 245 249 / 0.2)",
              colorPrimaryActive: "#fff",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </div>
    </div>
  );
}
