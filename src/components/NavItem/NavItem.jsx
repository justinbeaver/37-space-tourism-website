import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

import config from "./NavItem.config";

import s from "./NavItem.module.scss";

const navItemClass = cva(s.navItem, config);

const NavItem = ({
  to,
  href,
  underline = "bottom",
  isActive,
  children,
  ...rest
}) => {
  let Tag;

  if (to) {
    Tag = Link;
  } else if (href) {
    Tag = "a";
  } else {
    Tag = "button";
  }

  return (
    <Tag
      to={to}
      href={href}
      className={navItemClass({ underline, active: isActive })}
      {...rest}
    >
      {children}
    </Tag>
  );

  // if (to !== undefined) {
  //   return (
  //     <Link
  //       to={to}
  //       className={navItemClass({ underline, active: isActive })}
  //       {...rest}
  //     >
  //       {children}
  //     </Link>
  //   );
  // } else if (href !== undefined) {
  //   return (
  //     <a
  //       href={href}
  //       className={navItemClass({ underline, active: isActive })}
  //       {...rest}
  //     >
  //       {children}
  //     </a>
  //   );
  // } else {
  //   return (
  //     <button
  //       className={navItemClass({ underline, active: isActive })}
  //       {...rest}
  //     >
  //       {children}
  //     </button>
  //   );
  // }
};
export default NavItem;

NavItem.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  underline: PropTypes.oneOf(Object.keys(config.variants.underline)),
  isActive: PropTypes.bool,
  children: PropTypes.node,
};
