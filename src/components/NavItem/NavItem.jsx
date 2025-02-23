import PropTypes from "prop-types";

import config from "./NavItem.config";

import s from "./NavItem.module.scss";

const NavItem = ({
  href,
  underline = "bottom",
  isActive,
  children,
  ...rest
}) => {
  return (
    <a
      className={`${s.navItem} ${
        config.underline[underline] ? config.underline[underline] : ""
      } ${isActive ? s.navItem__active : ""}`}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};
export default NavItem;

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  underline: PropTypes.oneOf(Object.keys(config.underline)),
  isActive: PropTypes.bool,
  children: PropTypes.node,
};
