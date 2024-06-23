import { PROFESSIONAL_SKILLS } from "@components/resume/professional-skillset-list/constants";
import Card from "@ui/cards";

const ProfessionalSkillSetList = () => (
  <Card>
    <ul>
      {PROFESSIONAL_SKILLS.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </Card>
);

export default ProfessionalSkillSetList;
