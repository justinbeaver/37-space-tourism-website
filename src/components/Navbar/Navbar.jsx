import { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Wrapper from "@/components/Wrapper/Wrapper";
import Icon from "@/components/Icon/Icon";
import DecorationLine from "@/components/DecorationLine/DecorationLine";
import NavItem from "@/components/NavItem/NavItem";
import NumerationSpan from "@/components/NumerationSpan/NumerationSpan";

import { useMediaQueriesContext } from "@/context/mediaQueriesContext";

import useBoolean from "@/hooks/useBoolean";
import useClickAway from "@/hooks/useClickAway";
import useFocusTrap from "@/hooks/useFocusTrap";
import useOnKeyPress from "@/hooks/useOnKeyPress";
import useDisableBodyScroll from "@/hooks/useDisableBodyScroll";
import { useCloseMenuOnLargerScreens, useNavbarHeight } from "./Navbar.hooks";

import LogoIcon from "@/assets/shared/logo.svg?react";
import content from "./Navbar.content.json";

import s from "./Navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, { on: openMenu, off: closeMenu }] = useBoolean(false);
  const { isSm } = useMediaQueriesContext();
  const { navbarRef } = useNavbarHeight();
  useDisableBodyScroll(isMenuOpen);
  useCloseMenuOnLargerScreens(closeMenu);

  return (
    <header ref={navbarRef} className={s.header}>
      <Wrapper size="lg" padding="none">
        <div className={s.headerInner}>
          <HomeLink />
          {isSm ? null : (
            <button
              className={s.menuBtn}
              aria-label={"open menu"}
              onClick={openMenu}
            >
              <Icon name="hamburger" aria-hidden="true" />
            </button>
          )}
          <Decoration />
          <Nav isOpen={isMenuOpen} onMenuClose={closeMenu} />
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
  const [clickAwayRef] = useClickAway(onMenuClose);
  const [focusTrapRef] = useFocusTrap(isOpen);
  useOnKeyPress("esc", onMenuClose);
  const { nav } = content;

  return (
    <nav
      ref={(element) => {
        clickAwayRef.current = element;
        focusTrapRef.current = element;
      }}
      className={`${s.nav} ${isOpen ? s.nav__open : ""}`}
      aria-hidden={!isSm && !isOpen}
    >
      {isSm ? null : (
        <div className={s.closeMenuBtnContainer}>
          <button
            className={s.menuBtn}
            tabIndex={isOpen ? 0 : -1}
            aria-label="close menu"
            onClick={onMenuClose}
          >
            <Icon name="close" aria-hidden="true" />
          </button>
        </div>
      )}

      <ul className={s.list}>
        {nav.map(({ label, href }, index) => (
          <Fragment key={index}>
            {index !== 0 && <div className={s.listSpacer} />}
            <li className={s.listItem}>
              <NavItem
                to={href}
                underline={isSm ? "bottom" : "right"}
                tabIndex={!isSm && !isOpen ? -1 : 0}
                onClick={onMenuClose}
              >
                <NumerationSpan margin="none">
                  {String(index).padStart(2, "0")}
                </NumerationSpan>
                <span>{label}</span>
              </NavItem>
            </li>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onMenuClose: PropTypes.func.isRequired,
};
