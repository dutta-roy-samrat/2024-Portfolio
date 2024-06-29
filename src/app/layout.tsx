import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@components/header";
import Footer from "@components/footer";
import CurrentDeviceContextProvider from "@contexts/current-device-context";

import styles from "./global.module.scss";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} ${styles.bodyClass}`}>
        <CurrentDeviceContextProvider breakPoints={{ lg: 1024 }}>
          <Header />
          {children}
          <Footer />
        </CurrentDeviceContextProvider>
      </body>
    </html>
  );
}
