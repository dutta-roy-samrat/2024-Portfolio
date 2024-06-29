import Link from "next/link";

import BulletPoint from "@components/ui/bullet-point";
import { Poppins } from "next/font/google";

import { CURRENT_DESIGNATION, PORTFOLIO_OWNER } from "@constants";
import { HEADER_NAV_LINKS } from "@routes";

import styles from "./main.module.scss";

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
    <div className={styles.headerStyle}>
      <BulletPoint>
        <div className={styles.headerLeftSection}>
          <h1 className={`${styles.portfolioOwnerName} ${poppins.className}`}>
            {PORTFOLIO_OWNER}
          </h1>
          <div>&nbsp;/&nbsp;</div>
          <h3 className={styles.designation}>{CURRENT_DESIGNATION}</h3>
        </div>
      </BulletPoint>
      <div className={styles.navLinkSection}>{renderNavLinks()}</div>
    </div>
  );
};

export default WebHeader;
