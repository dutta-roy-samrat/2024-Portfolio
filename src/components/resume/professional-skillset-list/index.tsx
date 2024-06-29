import Card from "@ui/cards";

import { PROFESSIONAL_SKILLS } from "./constants";

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
