import SocialMediaLinks from "@components/social-media-links";
import ExternalLink from "@components/ui/external-link";

import { getMailRoute } from "@helpers/routes";

import {
  EMAIL_DETAILS,
  PHONE_NUMBER_DETAILS,
  PORTFOLIO_OWNER,
  SOCIAL_MEDIA_DETAILS,
} from "@constants";

import styles from "./main.module.scss";

const Footer = () => (
  <footer className={styles.footerStyle}>
    <div>&copy; 2024 by {PORTFOLIO_OWNER}</div>
    <div className={styles.footerContactListing}>
      <div className={styles.phoneNum}>
        <div className={styles.phoneNumLabel}>{PHONE_NUMBER_DETAILS.label}</div>
        <div>{PHONE_NUMBER_DETAILS.value}</div>
      </div>
      <div className={styles.email}>
        <div className={styles.emailLabel}>{EMAIL_DETAILS.label}</div>
        <ExternalLink
          href={getMailRoute(EMAIL_DETAILS.value)}
          showExternalLinkIcon={false}
        >
          {EMAIL_DETAILS.value}
        </ExternalLink>
      </div>
      <div className={styles.socialMediaLinks}>
        <div className={styles.socialMediaLinksLabel}>{SOCIAL_MEDIA_DETAILS.label}</div>
        <div>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
