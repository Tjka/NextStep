import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import NextStepReact from './NextStepReact';
import MobileNextStepReact from './MobileNextStepReact';
/**
 * ResponsiveNextStep - A wrapper component that renders either NextStepReact or MobileNextStepReact
 * based on the screen size
 */
const ResponsiveNextStep = (props) => {
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
    console.log(!isClient);
    // During server-side rendering, default to desktop version
    if (!isClient) {
        return _jsx(NextStepReact, { ...props });
    }
    return isMobile ? _jsx(MobileNextStepReact, { ...props }) : _jsx(NextStepReact, { ...props });
};
export { ResponsiveNextStep };
