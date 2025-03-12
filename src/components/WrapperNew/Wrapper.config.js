import { cva } from "class-variance-authority";

import s from "./Wrapper.module.scss";

const BASE_CLASS = "wrapper";

export const config = {
  variants: {
    size: {
      md: [s[`${BASE_CLASS}__start--md`], s[`${BASE_CLASS}__end--md`]],
      lg: [s[`${BASE_CLASS}__start--lg`], s[`${BASE_CLASS}__end--lg`]],
      full: [s[`${BASE_CLASS}__start--full`], s[`${BASE_CLASS}__end--full`]],
      "full-lg": [s[`${BASE_CLASS}__start--full`], s[`${BASE_CLASS}__end--lg`]],
      "full-md": [s[`${BASE_CLASS}__start--full`], s[`${BASE_CLASS}__end--md`]],
      "lg-md": [s[`${BASE_CLASS}__start--lg`], s[`${BASE_CLASS}__end--md`]],
      "md-lg": [s[`${BASE_CLASS}__start--md`], s[`${BASE_CLASS}__end--lg`]],
      "md-full": [s[`${BASE_CLASS}__start--md`], s[`${BASE_CLASS}__end--full`]],
      "lg-full": [s[`${BASE_CLASS}__start--lg`], s[`${BASE_CLASS}__end--full`]],
    },
    padding: {
      none: null,
      md: s[`${BASE_CLASS}__padding--md`],
    },
    pad: {
      md: s[`${BASE_CLASS}__pad--md`],
      lg: s[`${BASE_CLASS}__pad--lg`],
    },
  },
};

export const wrapperClass = cva(s[BASE_CLASS], config);
