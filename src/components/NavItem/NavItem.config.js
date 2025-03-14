import s from "./NavItem.module.scss";

const config = {
  variants: {
    underline: {
      bottom: s.navItem__underlineBottom,
      right: s.navItem__underlineRight,
    },
    active: {
      true: s.navItem__active,
    },
    pending: {
      true: s.navItem__pending,
    },
  },
};
export default config;
