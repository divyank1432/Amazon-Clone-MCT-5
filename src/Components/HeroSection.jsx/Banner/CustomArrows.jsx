
import PropTypes from 'prop-types';

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      onClick={onClick} style={{ ...style, display: 'block', right: '10px', zIndex: 1, backgroundColor: 'transparent' }}
    >
      
    </div>
  );
};

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: 'block', left: '10px', zIndex: 1, backgroundColor: 'transparent' }}  onClick={onClick} 
    >
    </div>
  );
};

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export const SliderDots = (props) => {
  const { slides, activeIndex, onClickDot } = props;
  return (
    <div className="slider-dots">
      {slides.map((slide, index) => (
        <span
          key={index}
          className={`dot ${index === activeIndex ? 'active' : ''}`}
          onClick={() => onClickDot(index)}
        />
      ))}
    </div>
  );
};

SliderDots.propTypes = {
  slides: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  onClickDot: PropTypes.func.isRequired,
};
