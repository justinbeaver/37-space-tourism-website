import PropTypes from "prop-types";

import s from "./DecorationLine.module.scss";

const DecorationLine = ({ className = "" }) => {
  return <div className={`${s.decorationLine} ${className}`} />;
};
export default DecorationLine;

DecorationLine.propTypes = {
  className: PropTypes.string,
};
