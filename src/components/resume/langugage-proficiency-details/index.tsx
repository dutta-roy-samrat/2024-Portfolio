import { LANGUAGE_FLUENCY_LIST } from "@constants";
import Card from "@ui/cards";

const LanguageProficiencyDetails = () => (
  <Card>
    <ul>
      {LANGUAGE_FLUENCY_LIST.map((lang) => (
        <li key={lang}>{lang}</li>
      ))}
    </ul>
  </Card>
);

export default LanguageProficiencyDetails;
