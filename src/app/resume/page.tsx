import EducationList from "@components/resume/education-list";
import ExperienceList from "@components/resume/experience-list";
import LanguageProficiencyList from "@components/resume/langugage-proficiency-list";
import ProfessionalSkillSetList from "@components/resume/professional-skillset-list";
import BulletPoint from "@components/ui/bullet-point";
import Button from "@components/ui/button";
import ExternalLink from "@components/ui/external-link";

import { RESUME_LINK_DETAILS, RESUME_PDF_URL } from "@routes";

import { poppins } from "@assets/fonts";

import styles from "./main.module.scss";

const ResumePage = () => (
  <div className={`${styles.resumePage} ${poppins.variable}`}>
    <h1 className={styles.pageHeader}>
      <BulletPoint>{RESUME_LINK_DETAILS.text}</BulletPoint>
    </h1>
    <div className={styles.section}>
      <div className={styles.experienceSectionTitle}>
        <div className={styles.sectionHeader}>Experience</div>
        <ExternalLink href={RESUME_PDF_URL} showExternalLinkIcon={false}>
          <Button>DOWNLOAD CV</Button>
        </ExternalLink>
      </div>
      <ExperienceList />
    </div>
    <div className={styles.section}>
      <div className={styles.sectionHeader}>Education</div>
      <EducationList />
    </div>
    <div className={styles.section}>
      <div className={styles.sectionHeader}>Professional SkillSet</div>
      <ProfessionalSkillSetList />
    </div>
    <div className={styles.section}>
      <div className={styles.sectionHeader}>Language Proficiency</div>
      <LanguageProficiencyList />
    </div>
  </div>
);

export default ResumePage;
