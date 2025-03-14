import PropTypes from "prop-types";

import s from "./DecorationLine.module.scss";

const DecorationLine = ({ className = "", ...rest }) => {
  return <div className={`${s.decorationLine} ${className}`} {...rest} />;
};
export default DecorationLine;

DecorationLine.propTypes = {
  className: PropTypes.string,
};
