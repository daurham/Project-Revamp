import React, { useState, useEffect } from 'react';
import c from './Carousel.css';

function Carousel(props) {
  const { children, show, infiniteLoop } = props;

  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(infiniteLoop && children.length > show);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const next = () => {
    if (isRepeating || currentIndex < (length - show)) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    const output = [];
    for (let index = 0; index < show; index += 1) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    const output = [];
    for (let index = 0; index < show; index += 1) {
      output.push(children[index]);
    }
    return output;
  };

  const shownNum = `show${show}`;

  return (
    <div className={c.carousel_container}>
      <div className={c.carousel_wrapper}>
        {(isRepeating || currentIndex > 0) && (
        <button className={c.left_arrow} onClick={prev} type="button">
          &lt;
        </button>
        )}
        <div className={c.carousel_content_wrapper}>
          <div
            className={`${c.carousel_content} ${c[shownNum]}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !transitionEnabled ? 'none' : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {(length > show && isRepeating) && renderExtraPrev()}
            {children}
            {(length > show && isRepeating) && renderExtraNext()}
          </div>
        </div>
        {(isRepeating || currentIndex < (length - show)) && (
        <button className={c.right_arrow} onClick={next} type="button">
          &gt;
        </button>
        )}
      </div>
    </div>
  );
}

export default Carousel;
