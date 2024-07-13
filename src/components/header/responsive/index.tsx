import { useEffect, useState } from "react";

import BulletPoint from "@components/ui/bullet-point";
import HamburgerButton from "@components/ui/hamburger-icon";
import NavDropdown from "./nav-dropdown";

import { CURRENT_DESIGNATION, PORTFOLIO_OWNER } from "@constants";

import { poppins } from "@assets/fonts";

import styles from "./main.module.scss";

const ResponsiveHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className={styles.headerStyle}>
      <div className={styles.headerLeftSection}>
        <BulletPoint>
          <div className={`${styles.portfolioOwnerName} ${poppins.className}`}>
            {PORTFOLIO_OWNER}
          </div>
        </BulletPoint>
        <div className={styles.designation}>{CURRENT_DESIGNATION}</div>
      </div>
      <HamburgerButton
        onClick={() =>
          setShowDropdown((prevDropdownVisibility) => !prevDropdownVisibility)
        }
        isOpen={showDropdown}
      />
      {showDropdown && <NavDropdown setShowDropdown={setShowDropdown} />}
    </header>
  );
};

export default ResponsiveHeader;
