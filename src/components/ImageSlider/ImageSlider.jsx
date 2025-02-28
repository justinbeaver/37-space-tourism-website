import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

import config from "./ImageSlider.config";

import s from "./ImageSlider.module.scss";

const imageSliderClass = cva(s.imageSlider, config);

const ImageSlider = ({
  direction = "horizontal",
  transition = "slow",
  images,
  selectedImageIndex = 0,
  className = "",
}) => {
  const currentImageIndex = Math.max(
    0,
    Math.min(selectedImageIndex, images.length - 1)
  );

  return (
    <div
      className={`${imageSliderClass({ direction, transition })} ${className}`}
      style={{ "--_currentImageIndex": currentImageIndex }}
    >
      {images.map((item, index) => (
        <picture
          key={index}
          className={s.picture}
          aria-hidden={index !== currentImageIndex}
        >
          <source srcSet={item.urls.webp} type="image/webp" />
          <img className={s.img} src={item.urls.png} alt={item.alt} />
        </picture>
      ))}
    </div>
  );
};
export default ImageSlider;

ImageSlider.propTypes = {
  direction: PropTypes.oneOf(Object.keys(config.variants.direction)),
  transition: PropTypes.oneOf(Object.keys(config.variants.transition)),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        png: PropTypes.string.isRequired,
        webp: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  selectedImageIndex: PropTypes.number.isRequired,
  className: PropTypes.string,
};
