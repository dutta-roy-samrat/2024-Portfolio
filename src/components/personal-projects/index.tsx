import Card from "@ui/cards";
import { PERSONAL_PROJECTS } from "./constants";
import Image from "next/image";
import ExternalLink from "@ui/external-link";

const PersonalProjectList = () =>
  PERSONAL_PROJECTS.map(({ title, description, src, link, role }) => (
    <Card key={title}>
      <div>{title}</div>
      <div>{role}</div>
      <div>{description}</div>
      <ExternalLink href={link} showExternalLinkIcon={false}>
        <Image src={src} alt={title} />
      </ExternalLink>
    </Card>
  ));

export default PersonalProjectList;
