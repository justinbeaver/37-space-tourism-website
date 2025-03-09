import s from "./Wrapper.module.scss";

const config = {
  variants: {
    size: {
      md: s.wrapper__md,
      lg: s.wrapper__lg,
    },
    padding: {
      none: null,
      md: s["wrapper__padding--md"],
    },
  },
};
export default config;
