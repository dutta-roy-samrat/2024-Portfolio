import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

import SocialMediaLinks from "@components/social-media-links";
import Card from "@components/ui/cards";

import { CURRENT_DESIGNATION, PORTFOLIO_OWNER } from "@constants";
import { PERSONAL_PROJECT_LINK_DETAILS, RESUME_LINK_DETAILS } from "@routes";

import ProfileImg from "@assets/images/profile-img.png";

import styles from "./main.module.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const HomePage = () => {
  const renderButtonLinks = () =>
    [RESUME_LINK_DETAILS, PERSONAL_PROJECT_LINK_DETAILS].map(
      ({ route, text }) => (
        <Link key={route} href={route}>
          {text}
        </Link>
      )
    );
  return (
    <div className={styles.homePage}>
      <Card styles={styles}>
        <Image
          src={ProfileImg}
          alt={PORTFOLIO_OWNER}
          className={styles.profileImg}
        />
        <div className={`${styles.portfolioOwnerName} ${poppins.className}`}>
          {PORTFOLIO_OWNER}
        </div>
        <hr />
        <div>{CURRENT_DESIGNATION}</div>
        <div>
          <SocialMediaLinks />
        </div>
      </Card>
      <div className={styles.introtext}>
        <div>Hello</div>
        <div>Here's who I am AND what I do</div>
        <div>{renderButtonLinks()}</div>
        <p>
          I am a dedicated web development enthusiast actively honing my
          frontend skills. I specialize in React, JavaScript, Next.js, and
          various other essential frontend tools, continually striving to expand
          my knowledge and expertise.
        </p>
        <p>
          Originally a Mechanical Engineer, I've transitioned into a passionate
          front-end web developer, dedicated to crafting efficient and engaging
          user interfaces.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
