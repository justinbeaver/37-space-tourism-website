import s from "./NumerationSpan.module.scss";

const config = {
  variants: {
    margin: {
      none: s["numerationSpan__margin--none"],
      right: s["numerationSpan__margin--right"],
    },
    tone: {
      normal: s["numerationSpan__tone--normal"],
      muted: s["numerationSpan__tone--muted"],
    },
  },
};
export default config;
