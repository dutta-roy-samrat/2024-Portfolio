import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import defaultStyles from "./main.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styles?: ModularStyles;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  styles = defaultStyles,
  children,
  ...restProps
}) => (
  <button className={styles.btnStyle} {...restProps}>
    {children}
  </button>
);

export default Button;
