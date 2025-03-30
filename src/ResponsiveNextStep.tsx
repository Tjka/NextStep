import React, { useEffect, useState } from 'react';
import NextStepReact from './NextStepReact';
import MobileNextStepReact from './MobileNextStepReact';
import { NextStepProps } from './types';

/**
 * ResponsiveNextStep - A wrapper component that renders either NextStepReact or MobileNextStepReact
 * based on the screen size
 */
const ResponsiveNextStep: React.FC<NextStepProps> = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
console.log(!isClient)
  // During server-side rendering, default to desktop version
  if (!isClient) {
    return <NextStepReact {...props} />;
  }

  return isMobile ? <MobileNextStepReact {...props} /> : <NextStepReact {...props} />;
};

export { ResponsiveNextStep }; 