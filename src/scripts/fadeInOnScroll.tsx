import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInOnScrollProps {
  children: React.ReactNode;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const fadeClasses = `opacity-0 transition-opacity duration-1000 ${
    isVisible ? 'opacity-100' : ''
  }`;

  return <div ref={ref} className={fadeClasses}>{children}</div>;
};

export default FadeInOnScroll;