import PropTypes from "prop-types";

import iconsMap from "./Icon.config";

const getIcon = (name) => {
  return iconsMap[name] || null;
};

const Icon = ({ name, ...rest }) => {
  const IconComponent = getIcon(name);

  return IconComponent ? <IconComponent {...rest} /> : null;
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconsMap)).isRequired,
};
export default Icon;
