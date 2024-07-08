import Card from "@components/ui/card";
import BulletPoint from "@components/ui/bullet-point";

import { LANGUAGE_FLUENCY_LIST } from "./constants";

import styles from "../main.module.scss";

const LanguageProficiencyList = () => (
  <Card>
    <ul className={styles.noDefaultBulletList}>
      {LANGUAGE_FLUENCY_LIST.map((lang) => (
        <li key={lang}>
          <BulletPoint styles={styles}>{lang}</BulletPoint>
        </li>
      ))}
    </ul>
  </Card>
);

export default LanguageProficiencyList;
