import { poppins } from "@assets/fonts";
import PersonalProjectList from "@components/personal-projects";
import BulletPoint from "@components/ui/bullet-point";

import { PERSONAL_PROJECT_LINK_DETAILS } from "@routes";

import styles from "./main.module.scss";

const PersonalProjectsPage = () => (
  <div className={`${styles.personalProjectsPage} ${poppins.variable}`}>
    <h1 className={poppins.className}>
      <BulletPoint>{PERSONAL_PROJECT_LINK_DETAILS.text}</BulletPoint>
    </h1>
    <PersonalProjectList />
  </div>
);

export default PersonalProjectsPage;
