import Link from "next/link";

import BulletPoint from "@components/ui/bullet-point";
import { Nunito, Poppins } from "next/font/google";

import { CURRENT_DESIGNATION, PORTFOLIO_OWNER } from "@constants";
import { HEADER_NAV_LINKS } from "@routes";

import styles from "./main.module.scss";

const nunito = Nunito({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: "600",
  style: "normal",
});

const poppins = Poppins({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  weight: "600",
  style: "normal",
});

const WebHeader = () => {
  const renderNavLinks = () =>
    HEADER_NAV_LINKS.map(({ route, text }) => (
      <Link key={route} href={route} className={styles.navLink}>
        {text}
      </Link>
    ));

  return (
    <header className={styles.headerStyle}>
      <BulletPoint>
        <div className={styles.headerLeftSection}>
          <h1 className={`${styles.portfolioOwnerName} ${poppins.className}`}>
            {PORTFOLIO_OWNER}
          </h1>
          <div>&nbsp;/&nbsp;</div>
          <h3 className={`${styles.designation} ${nunito.className}`}>
            {CURRENT_DESIGNATION}
          </h3>
        </div>
      </BulletPoint>
      <nav className={`${styles.navLinkSection} ${nunito.className}`}>
        {renderNavLinks()}
      </nav>
    </header>
  );
};

export default WebHeader;
