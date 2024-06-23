import SocialMediaLinks from "@components/social-media-links";
import { CURRENT_DESIGNATION, PORTFOLIO_OWNER } from "@constants";
import { PROJECTS_LINK_DETAILS, RESUME_LINK_DETAILS } from "@routes";
import Image from "next/image";
import Link from "next/link";
import ProfileImg from "@assets/images/profile-img.png";

const HOME_PAGE = () => {
  const renderButtonLinks = () =>
    [RESUME_LINK_DETAILS, PROJECTS_LINK_DETAILS].map(({ route, text }) => (
      <Link key={route} href={route}>
        {text}
      </Link>
    ));
  return (
    <div>
      <div>
        <Image src={ProfileImg} alt="" />
        <div>{PORTFOLIO_OWNER}</div>
        <hr />
        <div>{CURRENT_DESIGNATION}</div>
        <div>
          <SocialMediaLinks />
        </div>
      </div>
      <div>
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

export default HOME_PAGE;
