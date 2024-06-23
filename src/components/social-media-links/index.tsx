import Image from "next/image";
import { SOCIAL_MEDIA_DETAILS } from "@constants";
import ExternalLink from "@ui/external-link";

const SocialMediaLinks = () => {
  return SOCIAL_MEDIA_DETAILS.value.map(({ icon, route, text }) => (
    <ExternalLink href={route} showExternalLinkIcon={false}>
      <Image src={icon} alt={text} />
    </ExternalLink>
  ));
};

export default SocialMediaLinks;
