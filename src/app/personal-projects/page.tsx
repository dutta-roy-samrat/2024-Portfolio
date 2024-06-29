import PersonalProjectList from "@components/personal-projects";
import BulletPoint from "@ui/bullet-point";

import { PERSONAL_PROJECT_LINK_DETAILS } from "@routes";

const PersonalProjectsPage = () => (
  <div>
    <BulletPoint>{PERSONAL_PROJECT_LINK_DETAILS.text}</BulletPoint>
    <PersonalProjectList />
  </div >
);

export default PersonalProjectsPage;
