import { PROFESSIONAL_SKILLS } from "@constants";
import Card from "@ui/cards";

const ProfessionalSkillSetDetails = () => (
  <Card>
    <ul>
      {PROFESSIONAL_SKILLS.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </Card>
);

export default ProfessionalSkillSetDetails;
