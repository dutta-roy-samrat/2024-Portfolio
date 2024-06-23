import EducationDetails from "@components/resume/education-details";
import ExperienceDetails from "@components/resume/experience-details";
import LanguageProficiencyDetails from "@components/resume/langugage-proficiency-details";
import ProfessionalSkillSetDetails from "@components/resume/professional-skillset-details";
import { RESUME_PDF_URL } from "@routes";
import Button from "@ui/button";
import ExternalLink from "@ui/external-link";

const ResumePage = () => {
  return (
    <div>
      <div>
        <div>
          <div>Experience</div>
          <ExternalLink href={RESUME_PDF_URL} showExternalLinkIcon={false}>
            <Button>DOWNLOAD CV</Button>
          </ExternalLink>
        </div>
        <ExperienceDetails />
      </div>
      <div>
        <div>Education</div>
        <EducationDetails />
      </div>
      <div>
        <div>Professional SkillSet</div>
        <ProfessionalSkillSetDetails />
      </div>
      <div>
        <div>Language Proficiency</div>
        <LanguageProficiencyDetails />
      </div>
    </div>
  );
};

export default ResumePage;
