import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

import config from "./NavItem.config";

import s from "./NavItem.module.scss";

const navItemClass = cva(s.navItem, config);

const NavItem = ({
  href,
  underline = "bottom",
  isActive,
  children,
  ...rest
}) => {
  return (
    <a
      className={navItemClass({ underline, active: isActive })}
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
  underline: PropTypes.oneOf(Object.keys(config.variants.underline)),
  isActive: PropTypes.bool,
  children: PropTypes.node,
};
