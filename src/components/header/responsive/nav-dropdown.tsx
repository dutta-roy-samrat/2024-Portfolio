import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { HEADER_NAV_LINKS } from "@routes";

import { poppins } from "@assets/fonts";

import styles from "./main.module.scss";

const NavDropdown = ({ setShowDropdown }) => {
  const pathname = usePathname();
  const renderNavLinks = () =>
    HEADER_NAV_LINKS.map(({ route, text }) => {
      const isRouteMatch = pathname === route;
      return (
        <Link
          key={route}
          href={route}
          className={`${styles.navLink} ${
            isRouteMatch ? styles.activeLink : ""
          } ${poppins.className}`}
          onClick={() => {
            setShowDropdown(
              (prevDropdownVisibility) => !prevDropdownVisibility
            );
          }}
        >
          {text}
        </Link>
      );
    });

  useEffect(() => {
    document.body?.classList.add(styles.noScroll);
    return () => document.body.classList.remove(styles.noScroll);
  }, []);

  return <nav className={styles.navDropdown}>{renderNavLinks()}</nav>;
};

export default NavDropdown;
