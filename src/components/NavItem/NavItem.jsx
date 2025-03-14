import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

import config from "./NavItem.config";

import s from "./NavItem.module.scss";

const navItemClass = cva(s.navItem, config);

const NavItem = ({ to, underline = "bottom", children, ...rest }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        navItemClass({ underline, active: isActive, pending: isPending })
      }
      {...rest}
    >
      {children}
    </NavLink>
  );
};
export default NavItem;

NavItem.propTypes = {
  to: PropTypes.string,
  underline: PropTypes.oneOf(Object.keys(config.variants.underline)),
  children: PropTypes.node,
};
