import { EXPERIENCE_DETAILS } from "@components/resume/experience-list/constants";
import { Fragment, ReactNode } from "react";
import Card from "@ui/cards";
import ExternalLink from "@ui/external-link";

type AchievementProps = {
  title: string;
  description: string;
};

const ExperienceList = () => {
  const renderAchievements = (achievements: AchievementProps[]): ReactNode =>
    achievements.map(({ title, description }) => (
      <Fragment key={title}>
        <li>{title}</li>
        <p>{description}</p>
      </Fragment>
    ));

  const renderExperienceCards = () =>
    EXPERIENCE_DETAILS.map(
      ({
        dateRange,
        companyName,
        linkedInLink,
        relevantWebsiteLinks,
        jobDescription,
        designation,
        location,
        achievements,
      }) => (
        <Card>
          <div>{dateRange}</div>
          <div>{designation}</div>
          <div>
            <div>{companyName}</div>(
            <ExternalLink href={linkedInLink}>LinkedIn Link</ExternalLink>)
          </div>
          <div>{location}</div>
          <details>
            <summary>More about the job</summary>
            <p>{jobDescription}</p>
          </details>
          {achievements?.length && (
            <details>
              <summary>Highlight features worked upon</summary>
              <ul>{renderAchievements(achievements)}</ul>
            </details>
          )}
          {relevantWebsiteLinks?.length && (
            <details>
              <summary>Contributed websites</summary>
              <ul>
                {relevantWebsiteLinks.map((link) => (
                  <li key={link}>
                    <ExternalLink href={link}>{link}</ExternalLink>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </Card>
      )
    );

  return renderExperienceCards();
};

export default ExperienceList;
