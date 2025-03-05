import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { cva } from "class-variance-authority";

import config from "./PaginationCircle.config";

import s from "./PaginationCircle.module.scss";

const paginationCircleClass = cva(s.paginationCircle, config);

const PaginationCircle = ({
  label,
  to,
  size = "sm",
  className = "",
  ...rest
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        `${paginationCircleClass({
          size,
          active: isActive,
          pending: isPending,
        })} ${className}`
      }
      {...rest}
    >
      {label}
    </NavLink>
  );
};
export default PaginationCircle;

PaginationCircle.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(config.variants.size)),
  className: PropTypes.string,
};
