import { getMailRoute } from "@helpers/routes";
import {
  EMAIL_DETAILS,
  PHONE_NUMBER_DETAILS,
  PORTFOLIO_OWNER,
  SOCIAL_MEDIA_DETAILS,
} from "@constants";
import SocialMediaLinks from "@components/social-media-links";

const Footer = () => (
  <div>
    <div>&copy; 2024 by {PORTFOLIO_OWNER}</div>
    <div>
      <div>
        <div>
          <div>{PHONE_NUMBER_DETAILS.label}</div>
          <div>{PHONE_NUMBER_DETAILS.value}</div>
        </div>
      </div>
      <div>
        <div>{EMAIL_DETAILS.label}</div>
        <a href={getMailRoute(EMAIL_DETAILS.value)}>{EMAIL_DETAILS.value}</a>
      </div>
      <div>
        <div>{SOCIAL_MEDIA_DETAILS.label}</div>
        <div>
          <SocialMediaLinks />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
