import defaultStyles from "./main.module.scss";

const HamburgerButton = ({
  className = "",
  onClick,
  styles = defaultStyles,
}) => (
  <button
    className={`${styles.hamburgerContainer} ${className}`}
    onClick={onClick}
  >
    <div className={styles.firstLine}></div>
    <div className={styles.secondLine}></div>
    <div className={styles.thirdLine}></div>
  </button>
);

export default HamburgerButton;
