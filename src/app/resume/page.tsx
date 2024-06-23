import EducationList from "@components/resume/education-list";
import ExperienceList from "@components/resume/experience-list";
import LanguageProficiencyList from "@components/resume/langugage-proficiency-list";
import ProfessionalSkillSetList from "@components/resume/professional-skillset-list";
import { RESUME_PDF_URL } from "@routes";
import Button from "@ui/button";
import ExternalLink from "@ui/external-link";

const ResumePage = () => (
  <div>
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
