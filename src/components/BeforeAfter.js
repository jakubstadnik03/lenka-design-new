import React, { useState, useEffect, useRef, useCallback } from 'react';

const BeforeAfter = ({ beforeImage, afterImage }) => {
  const containerRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = useCallback((e) => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const newPosition = (e.clientX / containerWidth) * 100;
    setSliderPosition(newPosition);
  }, []);

  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', handleSliderChange);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleSliderChange]);

  const handleMouseDown = useCallback((e) => {
    document.addEventListener('mousemove', handleSliderChange);
    document.addEventListener('mouseup', handleMouseUp);
  }, [handleMouseUp, handleSliderChange]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;
    container.addEventListener('mousedown', handleMouseDown);
    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
    };
  }, [handleMouseDown]);

  return (
    <div className='col-lg-6'>
      <div className="rts-after-before-area-start rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="after-before-main-wrapper-one" ref={containerRef}>
                <figure className="cd-image-container is-visible">
                  <img src={afterImage} alt="Stav po realizaci" />
                  <span className="cd-image-label" data-type="original">Potom</span>

                  <div className="cd-resize-img" style={{ width: `${sliderPosition}%` }}>
                    <img src={beforeImage} alt="Stav před realizací" />
                    <span className="cd-image-label" data-type="modified">Předtím</span>
                  </div>

                  <span className="cd-handle" style={{ left: `${sliderPosition}%` }}></span>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
