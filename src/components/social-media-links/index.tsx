import Image from "next/image";
import { SOCIAL_MEDIA_DETAILS } from "@constants";

const SocialMediaLinks = () => {
  return SOCIAL_MEDIA_DETAILS.value.map(({ icon, route, text }) => (
    <a href={route} key={route} target="_blank" rel="noopener noreferrer">
      <Image src={icon} alt={text} />
    </a>
  ));
};

export default SocialMediaLinks;
