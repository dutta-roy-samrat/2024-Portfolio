import Card from "@components/ui/card";

import { EDUCATION_DETAILS } from "./constants";

import resumeStyles from "../main.module.scss";
import defaultStyles from "./main.module.scss";

const styles = { ...defaultStyles, ...resumeStyles };

const EducationList = () =>
  EDUCATION_DETAILS.map(({ dateRange, instituteName, course, location }) => (
    <Card key={course}>
      <div className={styles.dateRange}>{dateRange}</div>
      <div className={styles.instituteName}>{instituteName}</div>
      <div>{course}</div>
      <div>{location}</div>
    </Card>
  ));

export default EducationList;
