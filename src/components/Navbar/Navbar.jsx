import { Link } from "react-router-dom";

import Wrapper from "@/components/Wrapper/Wrapper";
import DecorationLine from "../DecorationLine/DecorationLine";
import NavItem from "@/components/NavItem/NavItem";
import NumerationSpan from "../NumerationSpan/NumerationSpan";
import { useNavbarHeight } from "./Navbar.hooks";
import { useMediaQueriesContext } from "@/context/mediaQueriesContext";
import LogoIcon from "@/assets/shared/logo.svg?react";
import content from "./Navbar.content.json";

import s from "./Navbar.module.scss";

const Navbar = () => {
  const { navbarRef } = useNavbarHeight();

  return (
    <header ref={navbarRef} className={s.header}>
      <Wrapper size="lg" padding="none">
        <div className={s.headerInner}>
          <HomeLink />
          <Decoration />
          <Nav />
        </div>
      </Wrapper>
    </header>
  );
};
export default Navbar;

const HomeLink = () => {
  return (
    <Link className={s.homeLink} to="/" aria-label="home">
      <LogoIcon aria-label="logo icon" />
    </Link>
  );
};

const Decoration = () => {
  const { isMd } = useMediaQueriesContext();

  return isMd ? (
    <DecorationLine className={s.decorationLine} aria-hidden={true} />
  ) : null;
};

const Nav = () => {
  const { nav } = content;

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {nav.map(({ label, href }, index) => (
          <>
            {index !== 0 && <div className={s.listSpacer} />}
            <li key={index} className={s.listItem}>
              <NavItem to={href}>
                <NumerationSpan margin="none">
                  {String(index).padStart(2, "0")}
                </NumerationSpan>
                <span>{label}</span>
              </NavItem>
            </li>
          </>
        ))}
      </ul>
    </nav>
  );
};
