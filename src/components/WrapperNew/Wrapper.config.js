import s from "./Wrapper.module.scss";

const config = {
  variants: {
    size: {
      md: [s["wrapper__start--md"], s["wrapper__end--md"]],
      lg: [s["wrapper__start--lg"], s["wrapper__end--lg"]],
      full: [s["wrapper__start--full"], s["wrapper__end--full"]],
      "full-lg": [s["wrapper__start--full"], s["wrapper__end--lg"]],
      "full-md": [s["wrapper__start--full"], s["wrapper__end--md"]],
      "lg-md": [s["wrapper__start--lg"], s["wrapper__end--md"]],
      "md-lg": [s["wrapper__start--md"], s["wrapper__end--lg"]],
      "md-full": [s["wrapper__start--md"], s["wrapper__end--full"]],
      "lg-full": [s["wrapper__start--lg"], s["wrapper__end--full"]],
    },
    padding: {
      default: [s["wrapper__padding--left"], s["wrapper__padding--right"]],
      none: null,
      left: s["wrapper__padding--left"],
      right: s["wrapper__padding--right"],
    },
  },
};
export default config;
