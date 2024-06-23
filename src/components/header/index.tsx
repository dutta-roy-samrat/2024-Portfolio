import { CURRENT_DESIGNATION, PORTFOLIO_OWNER } from "../../constants";
import { HEADER_NAV_LINKS } from "../../routes";
import Link from "next/link";

const Header = () => {
  const renderNavLinks = () =>
    HEADER_NAV_LINKS.map(({ route, text }) => (
      <Link key={route} href={route}>
        {text}
      </Link>
    ));

  return (
    <div>
      <div>
        <h1>{PORTFOLIO_OWNER}</h1>
        <div>/</div>
        <h3>{CURRENT_DESIGNATION}</h3>
      </div>
      <div>{renderNavLinks()}</div>
    </div>
  );
};

export default Header;
