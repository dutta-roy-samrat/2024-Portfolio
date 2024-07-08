import { FC, ReactNode } from "react";

import defaultStyles from "./main.module.scss";

type CardProps = {
  children: ReactNode;
  styles?: ModularStyles;
};

const Card: FC<CardProps> = ({ children, styles = defaultStyles }) => (
  <div className={styles.cardStyle}>{children}</div>
);

export default Card;
