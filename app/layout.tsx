import GlobalSetting from "./GlobalSetting";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <GlobalSetting>{children}</GlobalSetting>
      </body>
    </html>
  );
}
