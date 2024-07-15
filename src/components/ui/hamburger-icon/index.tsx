import { FC } from "react";

import defaultStyles from "./main.module.scss";

type HamburgerButtonProps = {
  className?: string;
  onClick: () => void;
  styles?: ModularStyles;
  isOpen: boolean;
};

const HamburgerButton: FC<HamburgerButtonProps> = ({
  className = "",
  onClick,
  styles = defaultStyles,
  isOpen = false,
}) => (
  <button
    className={`${styles.hamburgerContainer} ${className} ${
      isOpen ? styles.openHamburgerContainer : ""
    }`}
    onClick={onClick}
  >
    <div className={styles.firstLine}></div>
    <div className={styles.secondLine}></div>
    <div className={styles.thirdLine}></div>
  </button>
);

export default HamburgerButton;
