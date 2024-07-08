import Card from "@components/ui/card";

import { PROFESSIONAL_SKILLS } from "./constants";
import BulletPoint from "@components/ui/bullet-point";
import styles from "../main.module.scss";

const ProfessionalSkillSetList = () => (
  <Card>
    <ul className={styles.noDefaultBulletList}>
      {PROFESSIONAL_SKILLS.map((skill) => (
        <li key={skill}>
          <BulletPoint styles={styles}>{skill}</BulletPoint>
        </li>
      ))}
    </ul>
  </Card>
);

export default ProfessionalSkillSetList;
