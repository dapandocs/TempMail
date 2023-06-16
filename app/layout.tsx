import GlobalSetting from "./GlobalSetting";
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
        <GlobalSetting>{children}</GlobalSetting>
      </body>
    </html>
  );
}
