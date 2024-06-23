import { EDUCATION_DETAILS } from "@components/resume/education-list/constants";
import Card from "@ui/cards";

const EducationList = () =>
  EDUCATION_DETAILS.map(
    ({ dateRange, instituteName, course, location, score }) => (
      <Card key={course}>
        <div>{dateRange}</div>
        <div>{instituteName}</div>
        <div>{course}</div>
        <div>{location}</div>
      </Card>
    )
  );

export default EducationList;
