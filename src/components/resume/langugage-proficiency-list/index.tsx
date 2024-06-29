import Card from "@ui/cards";

import { LANGUAGE_FLUENCY_LIST } from "./constants";

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
