import PropTypes from "prop-types";
import { cva } from "class-variance-authority";

import config from "./ImageSlider.config";

import s from "./ImageSlider.module.scss";

const imageSliderClass = cva(s.imageSlider, config);

const ImageSlider = ({
  direction = "horizontal",
  transition = "slow",
  imageFit = "contain",
  imagePosition,
  images = [],
  selectedImageIndex = 0,
  className = "",
}) => {
  const currentImageIndex = Math.max(
    0,
    Math.min(selectedImageIndex, images.length - 1)
  );

  return (
    <div
      className={`${imageSliderClass({
        direction,
        transition,
        imageFit,
        imagePosition,
      })} ${className}`}
      style={{ "--_currentImageIndex": currentImageIndex }}
    >
      {images.map((item, index) => (
        <picture
          key={index}
          className={s.picture}
          aria-hidden={index !== currentImageIndex}
        >
          {item.urls.webp && (
            <source srcSet={item.urls.webp} type="image/webp" />
          )}
          <img className={s.img} src={item.urls.default} alt={item.alt} />
        </picture>
      ))}
    </div>
  );
};
export default ImageSlider;

ImageSlider.propTypes = {
  direction: PropTypes.oneOf(Object.keys(config.variants.direction)),
  transition: PropTypes.oneOf(Object.keys(config.variants.transition)),
  imageFit: PropTypes.oneOf(Object.keys(config.variants.imageFit)),
  imagePosition: PropTypes.oneOf(Object.keys(config.variants.imagePosition)),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      urls: PropTypes.shape({
        default: PropTypes.string.isRequired,
        webp: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
  selectedImageIndex: PropTypes.number.isRequired,
  className: PropTypes.string,
};
