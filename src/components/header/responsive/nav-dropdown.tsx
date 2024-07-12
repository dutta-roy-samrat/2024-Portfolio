import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { HEADER_NAV_LINKS } from "@routes";

import { poppins } from "@assets/fonts";

import styles from "./main.module.scss";

const NavDropdown = ({ setShowDropdown, pageYCoordWhenDropdownClosed }) => {
  const pathname = usePathname();
  console.log(pathname, "kkl");
  const renderNavLinks = () =>
    HEADER_NAV_LINKS.map(({ route, text }) => (
      <Link
        key={route}
        href={route}
        className={`${styles.navLink} ${
          pathname === route ? styles.activeLink : ""
        } ${poppins.className}`}
        onClick={() => {
          // scrollBy(0, pageYCoordWhenDropdownClosed);
          setShowDropdown((prevDropdownVisibility) => !prevDropdownVisibility);
        }}
      >
        {text}
      </Link>
    ));

  // useEffect(() => {
  //   document.body?.classList.add(styles.noScroll);
  //   // window?.scrollTo(0, 0);
  //   return () => document.body.classList.remove(styles.noScroll);
  // }, []);

  return <nav className={styles.navDropdown}>{renderNavLinks()}</nav>;
};

export default NavDropdown;
