import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Progress = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 307.919; // 307.919 is the strokeDasharray value
    setScrollPosition(scrolled);
    setIsTop(winScroll === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    !isTop && (
      <div className="progress-wrap active-progress" onClick={scrollToTop}>
        <div className="icon-progress" style={{postition: "relative", zIndex: "999"}}>
          <FontAwesomeIcon icon={faArrowUp} /> 
        </div>
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path
            className="path"
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: 'stroke-dashoffset 10ms linear 0s',
              strokeDasharray: '307.919, 307.919',
              strokeDashoffset: 307.919 - scrollPosition,
              stroke: 'gold',
            }}
          />
        </svg>
      </div>
    )
  );
};

export default Progress;
