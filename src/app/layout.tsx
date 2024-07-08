import type { Metadata } from "next";

import Header from "@components/header";
import Footer from "@components/footer";
import CurrentDeviceContextProvider from "@contexts/current-device-context";

import styles from "./global.module.scss";
import { nunito } from "@assets/fonts";

export const metadata: Metadata = {
  title: "Samrat's Portfolio",
  description:
    "Consists of my work experience, education background and more about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${styles.bodyClass}`}>
        <CurrentDeviceContextProvider>
          <Header />
          {children}
          <Footer />
        </CurrentDeviceContextProvider>
      </body>
    </html>
  );
}
