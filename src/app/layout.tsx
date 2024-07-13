import type { Metadata } from "next";

import Header from "@components/header";
import Footer from "@components/footer";
import CurrentDeviceContextProvider from "@contexts/current-device-context";

import { nunito } from "@assets/fonts";
import styles from "./global.module.scss";

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
    <html lang="en" className={nunito.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={styles.bodyClass}>
        <CurrentDeviceContextProvider>
          <Header />
          {children}
          <Footer />
        </CurrentDeviceContextProvider>
      </body>
    </html>
  );
}
