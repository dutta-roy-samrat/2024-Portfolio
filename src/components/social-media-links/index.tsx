import Image from "next/image";

import ExternalLink from "@components/ui/external-link";

import { SOCIAL_MEDIA_DETAILS } from "@constants";

const SocialMediaLinks = () => {
  return SOCIAL_MEDIA_DETAILS.value.map(({ icon, route, text }) => (
    <ExternalLink href={route} showExternalLinkIcon={false} key={route}>
      <Image src={icon} alt={text} width={14} height={16} />
    </ExternalLink>
  ));
};

export default SocialMediaLinks;
