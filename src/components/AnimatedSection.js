import React from 'react';
import useOnScreen from '../hooks/useOnScreen';

const AnimatedSection = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-section ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
