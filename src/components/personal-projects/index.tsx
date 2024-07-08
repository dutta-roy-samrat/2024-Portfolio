import Image from "next/image";

import Card from "@components/ui/card";
import ExternalLink from "@components/ui/external-link";

import { PERSONAL_PROJECTS } from "./constants";

import styles from "./main.module.scss";

const PersonalProjectList = () =>
  PERSONAL_PROJECTS.map(({ title, description, src, link, role }) => (
    <Card key={title} styles={styles}>
      <div className={styles.projectInfo}>
        <div className={styles.projectTitle}>{title}</div>
        <div className={styles.role}>{role}</div>
        <p>{description}</p>
      </div>
      <ExternalLink href={link} showExternalLinkIcon={false}>
        <Image src={src} alt={title} className={styles.projectImg} />
      </ExternalLink>
    </Card>
  ));

export default PersonalProjectList;
