import { poppins } from "@assets/fonts";
import BulletPoint from "@components/ui/bullet-point";
import { CURRENT_DESIGNATION, PORTFOLIO_OWNER } from "@constants";

import styles from "./main.module.scss";
import HamburgerButton from "@components/ui/hamburger-icon";
import { useState } from "react";
import { createPortal } from "react-dom";
import NavDropdown from "./nav-dropdown";

const ResponsiveHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  // const [pageYCoordWhenDropdownClosed, setPageYCoordWhenDropdownClosed] =
  //   useState(0);
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
        onClick={() => {
          // if (showDropdown) {
          //   window?.scrollBy(pageYCoordWhenDropdownClosed);
          // }
          setShowDropdown((prevDropdownVisibility) => !prevDropdownVisibility);
          // setPageYCoordWhenDropdownClosed(window?.scrollY);
        }}
      />
      {createPortal(
        showDropdown && (
          <NavDropdown
            setShowDropdown={setShowDropdown}
            // pageYCoordWhenDropdownClosed={pageYCoordWhenDropdownClosed}
          />
        ),
        document.querySelector("#modal")
      )}
    </header>
  );
};

export default ResponsiveHeader;
