import Image from "next/image";

import ExternalLink from "@components/ui/external-link";

import { SOCIAL_MEDIA_DETAILS } from "@constants";

const SocialMediaLinks = () => {
  return SOCIAL_MEDIA_DETAILS.value.map(({ icon, route, text }) => (
    <ExternalLink href={route} showExternalLinkIcon={false}>
      <Image src={icon} alt={text} />
    </ExternalLink>
  ));
};

export default SocialMediaLinks;
