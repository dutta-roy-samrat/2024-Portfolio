import { Fragment, ReactNode } from "react";

import Card from "@components/ui/card";
import ExternalLink from "@components/ui/external-link";

import { EXPERIENCE_DETAILS } from "./constants";

import resumeStyles from "../main.module.scss";
import defaultStyles from "./main.module.scss";

type AchievementProps = {
  title: string;
  description: string;
};

const styles = { ...defaultStyles, ...resumeStyles };

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
          <div className={styles.dateRange}>{dateRange}</div>
          <div className={styles.designation}>{designation}</div>

          <div className={styles.companyName}>
            {companyName}
            <ExternalLink href={linkedInLink} />
          </div>

          <div className={styles.location}>{location}</div>
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
                    <ExternalLink href={link} styles={styles}>
                      {link}
                    </ExternalLink>
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
