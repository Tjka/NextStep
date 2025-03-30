export { NextStepProvider, useNextStep } from './NextStepContext';
export { default as NextStep } from './NextStep';
export { default as NextStepReact } from './NextStepReact';

export { default as NextStepViewport } from './NextStepViewport';
export type {
  NextStepProps,
  Tour,
  Step,
  NextStepContextType,
  CardComponentProps,
} from './types';
export type { NavigationAdapter } from './types/navigation';

// Export new mobile-optimized components
export { default as MobileNextStepReact } from './MobileNextStepReact';
export { ResponsiveNextStep } from './ResponsiveNextStep';

// Export adapters
export { useWindowAdapter } from './adapters/window';
export { useNextAdapter } from './adapters/next';
export { useReactRouterAdapter } from './adapters/react-router';

// Export types
export * from './types';
