import React, { useState, useEffect, useRef } from 'react';

const BeforeAfter = ({ beforeImage, afterImage }) => {
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    const containerWidth = containerRef.current.offsetWidth;
    const newPosition = (e.clientX / containerWidth) * 100;
    setSliderPosition(newPosition);
  };

  const handleMouseDown = (e) => {
    document.addEventListener('mousemove', handleSliderChange);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleSliderChange);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('mousedown', handleMouseDown);
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="rts-after-before-area-start rts-section-gap">
      <div className="container-full">
        <div className="row">
          <div className="col-lg-12">
            <div className="after-before-main-wrapper-one" ref={containerRef}>
              <figure className="cd-image-container is-visible">
                <img src="assets/images/before-after/01.png" alt="Original Image" />
                <span className="cd-image-label" data-type="original">Potom</span>

                <div className="cd-resize-img" style={{ width: `${sliderPosition}%` }}>
                  <img src="assets/images/before-after/02.png" alt="Modified Image" />
                  <span className="cd-image-label" data-type="modified">Předtím</span>
                </div>

                <span className="cd-handle" style={{ left: `${sliderPosition}%` }}></span>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
