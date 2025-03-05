import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { cva } from "class-variance-authority";

import config from "./PaginationDot.config";

import s from "./PaginationDot.module.scss";

const paginationDotClass = cva(s.paginationDot, config);

const PaginationDot = ({ label, to, size = "sm", className = "", ...rest }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        `${paginationDotClass({
          size,
          active: isActive,
          pending: isPending,
        })} ${className}`
      }
      {...rest}
    >
      <div className={s.dot} />
      <span className="visually-hidden">{label}</span>
    </NavLink>
  );
};
export default PaginationDot;

PaginationDot.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(config.variants.size)),
  className: PropTypes.string,
};
