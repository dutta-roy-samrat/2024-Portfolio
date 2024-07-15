"use client";

import Image from "next/image";
import Link from "next/link";

import SocialMediaLinks from "@components/social-media-links";
import Card from "@components/ui/card";
import Button from "@components/ui/button";

import { CURRENT_DESIGNATION, PORTFOLIO_OWNER } from "@constants";
import { PERSONAL_PROJECT_LINK_DETAILS, RESUME_LINK_DETAILS } from "@routes";

import { poppins } from "@assets/fonts";
import ProfileImg from "@assets/images/profile-img.png";

import styles from "./main.module.scss";
import { useCurrentDeviceContext } from "@contexts/current-device-context";

const HomePage = () => {
  const { isDesktop } = useCurrentDeviceContext();
  const renderButtonLinks = () => (
    <div className={styles.btnGrp}>
      <Link href={RESUME_LINK_DETAILS.route}>
        <Button className={styles.resumeBtn}>{RESUME_LINK_DETAILS.text}</Button>
      </Link>
      <Link href={PERSONAL_PROJECT_LINK_DETAILS.route}>
        <Button className={styles.personalProjectsButton}>
          {PERSONAL_PROJECT_LINK_DETAILS.text}
        </Button>
      </Link>
    </div>
  );

  return (
    <article className={`${styles.homePage} ${poppins.variable}`}>
      <Card styles={styles}>
        <Image
          src={ProfileImg}
          alt={PORTFOLIO_OWNER}
          className={styles.profileImg}
        />
        <div className={styles.porfolioOwner}>{PORTFOLIO_OWNER}</div>
        <hr className={styles.divider} />
        {!isDesktop && renderButtonLinks()}
        {isDesktop && (
          <div className={styles.designation}>{CURRENT_DESIGNATION}</div>
        )}
        <div className={styles.socialMediaLinks}>
          <SocialMediaLinks />
        </div>
      </Card>
      <section className={styles.introHolder}>
        <div className={styles.greetings}>Hello</div>
        <h1 className={styles.introTitle}>
          Here&apos;s who I am AND what I do
        </h1>
        {isDesktop && renderButtonLinks()}
        <p className={styles.introPart1}>
          I am a dedicated web development enthusiast actively honing my
          frontend skills. I specialize in React, JavaScript, Next.js, and
          various other essential frontend tools, continually striving to expand
          my knowledge and expertise.
        </p>
        <p className={styles.introPart2}>
          Originally a Mechanical Engineer, I&apos;ve transitioned into a
          passionate front-end web developer, dedicated to crafting efficient
          and engaging user interfaces.
        </p>
      </section>
    </article>
  );
};

export default HomePage;
