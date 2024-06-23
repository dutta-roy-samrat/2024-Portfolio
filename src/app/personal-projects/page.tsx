import { PERSONAL_PROJECT_LINK_DETAILS } from "@routes";
import PersonalProjectList from "@components/personal-projects";
const PersonalProjectsPage = () => (
  <div>
    <div>
      <div></div>
      <div>{PERSONAL_PROJECT_LINK_DETAILS.text}</div>
    </div>
    <PersonalProjectList />
  </div>
);

export default PersonalProjectsPage;
