import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Wrapper from "@/components/Wrapper/Wrapper";
import Icon from "@/components/Icon/Icon";
import DecorationLine from "@/components/DecorationLine/DecorationLine";
import NavItem from "@/components/NavItem/NavItem";
import NumerationSpan from "@/components/NumerationSpan/NumerationSpan";

import { useMediaQueriesContext } from "@/context/mediaQueriesContext";

import useClickAway from "@/hooks/useClickAway";
import { useNavbarHeight } from "./Navbar.hooks";

import LogoIcon from "@/assets/shared/logo.svg?react";
import content from "./Navbar.content.json";

import s from "./Navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { navbarRef } = useNavbarHeight();

  return (
    <header ref={navbarRef} className={s.header}>
      <Wrapper size="lg" padding="none">
        <div className={s.headerInner}>
          <HomeLink />
          <ToggleButton
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
          <Decoration />
          <Nav isOpen={isMenuOpen} onMenuClose={() => setIsMenuOpen(false)} />
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

const Nav = ({ isOpen, onMenuClose }) => {
  const { isSm } = useMediaQueriesContext();
  const { ref: menuRef } = useClickAway(onMenuClose);
  const { nav } = content;

  return (
    <nav
      ref={menuRef}
      className={`${s.nav} ${isOpen ? s.nav__open : ""}`}
      aria-hidden={!isOpen}
    >
      <ul className={s.list}>
        {nav.map(({ label, href }, index) => (
          <>
            {/* TODO should return a single element */}
            {index !== 0 && <div className={s.listSpacer} />}
            <li key={index} className={s.listItem}>
              <NavItem
                to={href}
                underline={isSm ? "bottom" : "right"}
                tabIndex={isOpen ? 0 : -1}
                onClick={onMenuClose}
              >
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

Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onMenuClose: PropTypes.func.isRequired,
};

const ToggleButton = ({ isOpen, onClick }) => {
  const { isSm } = useMediaQueriesContext();

  return isSm ? null : (
    <button
      className={s.menuBtn}
      aria-label={isOpen ? "close menu" : "open menu"}
      onClick={onClick}
    >
      <Icon name={isOpen ? "close" : "hamburger"} aria-hidden="true" />
    </button>
  );
};

ToggleButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
