import EducationList from "@components/resume/education-list";
import ExperienceList from "@components/resume/experience-list";
import LanguageProficiencyList from "@components/resume/langugage-proficiency-list";
import ProfessionalSkillSetList from "@components/resume/professional-skillset-list";
import BulletPoint from "@components/ui/bullet-point";
import Button from "@components/ui/button";
import ExternalLink from "@components/ui/external-link";

import { RESUME_LINK_DETAILS, RESUME_PDF_URL } from "@routes";

const ResumePage = () => (
  <div>
    <BulletPoint>{RESUME_LINK_DETAILS.text}</BulletPoint>
    <div>
      <div>
        <div>Experience</div>
        <ExternalLink href={RESUME_PDF_URL} showExternalLinkIcon={false}>
          <Button>DOWNLOAD CV</Button>
        </ExternalLink>
      </div>
      <ExperienceList />
    </div>
    <div>
      <div>Education</div>
      <EducationList />
    </div>
    <div>
      <div>Professional SkillSet</div>
      <ProfessionalSkillSetList />
    </div>
    <div>
      <div>Language Proficiency</div>
      <LanguageProficiencyList />
    </div>
  </div>
);

export default ResumePage;
