import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Header from "@components/header";
import Footer from "@components/footer";
import CurrentDeviceContextProvider from "@contexts/current-device-context";

import styles from "./global.module.scss";

const nunito = Nunito({
  subsets: ["latin"],
  weight: "600",
});

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
      <body className={`${nunito.className} ${styles.bodyClass}`}>
        <CurrentDeviceContextProvider>
          <Header />
          {children}
          <Footer />
        </CurrentDeviceContextProvider>
      </body>
    </html>
  );
}
