import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import classNames from 'classnames';

const TypewriterAnimation = ({ text, animationDuration, animationDelay, className }) => {
  const textWrapperRef = useRef(null);

  useEffect(() => {
    const textWrapper = textWrapperRef.current;
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: true })
      .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: animationDuration,
        delay: (el, i) => animationDelay * (i + 1)
      }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
  }, [text, animationDuration, animationDelay]);

  const containerClassName = classNames('ml3', className);

  return (
    <div className={containerClassName} ref={textWrapperRef}>
      {text}
    </div>
  );
};

TypewriterAnimation.propTypes = {
  text: PropTypes.string.isRequired,
  animationDuration: PropTypes.number,
  animationDelay: PropTypes.number,
  className: PropTypes.string,
};

TypewriterAnimation.defaultProps = {
  animationDuration: 2250,
  animationDelay: 100,
};

export default TypewriterAnimation;
