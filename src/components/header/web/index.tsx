import Link from "next/link";

import BulletPoint from "@components/ui/bullet-point";

import { CURRENT_DESIGNATION, PORTFOLIO_OWNER } from "@constants";
import { HEADER_NAV_LINKS } from "@routes";

import { poppins } from "@assets/fonts";
import styles from "./main.module.scss";

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
          <div className={`${styles.portfolioOwnerName} ${poppins.className}`}>
            {PORTFOLIO_OWNER}
          </div>
          <div>&nbsp;/&nbsp;</div>
          <div className={styles.designation}>{CURRENT_DESIGNATION}</div>
        </div>
      </BulletPoint>
      <nav className={styles.navLinkSection}>
        {renderNavLinks()}
      </nav>
    </header>
  );
};

export default WebHeader;
