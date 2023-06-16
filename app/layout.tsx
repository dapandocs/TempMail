"use client";

import Navigation from "@/components/Navigation";
import { ConfigProvider } from "antd";
import "./globals.css";

export const metadata = {
  title: "Temp Mail - 临时邮箱",
  description:
    "Keep spam out of your mail and stay safe - just use a disposable temporary email address! Protect your personal email address from spam with Temp-mail",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="bg-gradient-to-t from-slate-900 to-slate-700 h-screen text-slate-100 font-mono">
          <Navigation />
          <div className="h-1 border-b border-b-slate-500/30 w-screen shadow-2xl mb-4 lg:mb-8" />
          <div className="pr-2 pl-2 lg:pr-0 lg:pl-0">
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
      </body>
    </html>
  );
}
