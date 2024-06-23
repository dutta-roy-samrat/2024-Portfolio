import { LANGUAGE_FLUENCY_LIST } from "@components/resume/langugage-proficiency-list/constants";
import Card from "@ui/cards";

const LanguageProficiencyList = () => (
  <Card>
    <ul>
      {LANGUAGE_FLUENCY_LIST.map((lang) => (
        <li key={lang}>{lang}</li>
      ))}
    </ul>
  </Card>
);

export default LanguageProficiencyList;
