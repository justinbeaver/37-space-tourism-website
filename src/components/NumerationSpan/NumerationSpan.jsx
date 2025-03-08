import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

import config from "./NumerationSpan.config";

import s from "./NumerationSpan.module.scss";

const numerationSpanClass = cva(s.numerationSpan, config);

const NumerationSpan = ({
  margin = "right",
  tone = "normal",
  className = "",
  children,
  ...rest
}) => {
  return (
    <span
      className={`${numerationSpanClass({ margin, tone })} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
};
export default NumerationSpan;

NumerationSpan.propTypes = {
  margin: PropTypes.oneOf(Object.keys(config.variants.margin)),
  tone: PropTypes.oneOf(Object.keys(config.variants.tone)),
  className: PropTypes.string,
  children: PropTypes.node,
};
