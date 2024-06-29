import { FC, ReactNode } from "react";

import defaultStyles from "./main.module.scss";

type BulletPointProps = {
  styles?: ModularStyles;
  children: ReactNode;
};
const BulletPoint: FC<BulletPointProps> = ({
  children,
  styles = defaultStyles,
}) => (
  <div className={styles.bulletPoint}>
    <span className={styles.bullet} />
    {children}
  </div>
);

export default BulletPoint;
