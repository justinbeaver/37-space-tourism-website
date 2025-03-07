import s from "./ImageSlider.module.scss";

const config = {
  variants: {
    direction: {
      horizontal: s.imageSlider__horizontal,
      "horizontal-reverse": s.imageSlider__horizontalReverse,
      vertical: s.imageSlider__vertical,
      "vertical-reverse": s.imageSlider__verticalReverse,
    },
    transition: {
      none: s.imageSlider__transitionNone,
      slow: s.imageSlider__transitionSlow,
    },
    imageFit: {
      contain: s.imageSlider__contain,
      cover: s.imageSlider__cover,
    },
  },
};
export default config;
