import { EDUCATION_DETAILS } from "@constants";
import Card from "@ui/cards";

const EducationDetails = () =>
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

export default EducationDetails;
