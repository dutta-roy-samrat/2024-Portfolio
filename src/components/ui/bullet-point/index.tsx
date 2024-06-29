import { FC, ReactNode } from "react";

import defaultStyles from "./main.module.scss"

type BulletPointProps = {
    styles?: ModularStyles;
    children: ReactNode
}
const BulletPoint: FC<BulletPointProps> = ({ children, styles = defaultStyles }) => <div><span></span> {children}</div>

export default BulletPoint;
