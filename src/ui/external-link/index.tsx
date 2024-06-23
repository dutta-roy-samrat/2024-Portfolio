import Image from "next/image";
import ExternalLinkIcon from "@assets/images/external-link-icon.svg";
import defaultStyles from "./main.module.scss";
import { FC, ReactNode } from "react";

interface ExternalLinkProps {
  styles?: ModularStyles;
  showExternalLinkIcon?: boolean;
  href: string;
  children?: ReactNode;
}

const ExternalLink: FC<ExternalLinkProps> = ({
  styles = defaultStyles,
  showExternalLinkIcon = true,
  href,
  children,
  ...restProps
}) => (
  <a
    href={href}
    target="_blank"
    className={styles.linkStyle}
    rel="noopener noreferrer"
    {...restProps}
  >
    <div className={styles.linkText}> {children}</div>
    {showExternalLinkIcon && (
      <Image src={ExternalLinkIcon} alt={href} className={styles.linkIcon} />
    )}
  </a>
);

export default ExternalLink;
