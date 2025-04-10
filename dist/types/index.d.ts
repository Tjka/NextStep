import { Transition } from 'motion/react';
import { NavigationAdapter } from './navigation';
export interface NextStepContextType {
    currentStep: number;
    currentTour: string | null;
    setCurrentStep: (step: number, delay?: number) => void;
    closeNextStep: () => void;
    startNextStep: (tourName: string) => void;
    isNextStepVisible: boolean;
}
export interface Step {
    icon: React.ReactNode | string | null;
    title: string;
    content: React.ReactNode;
    selector?: string;
    side?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
    showControls?: boolean;
    showPrevious?: boolean;
    showNext?: boolean;
    showSkip?: boolean;
    blockKeyboardControl?: boolean;
    pointerPadding?: number;
    pointerRadius?: number;
    nextRoute?: string;
    prevRoute?: string;
    viewportID?: string;
}
export interface Tour {
    tour: string;
    steps: Step[];
}
export interface NextStepProps {
    children: React.ReactNode;
    steps: Tour[];
    showNextStep?: boolean;
    shadowRgb?: string;
    shadowOpacity?: string;
    cardTransition?: Transition;
    cardComponent?: React.ComponentType<CardComponentProps>;
    onStart?: (tourName: string | null) => void;
    onStepChange?: (step: number, tourName: string | null) => void;
    onComplete?: (tourName: string | null) => void;
    onSkip?: (step: number, tourName: string | null) => void;
    displayArrow?: boolean;
    clickThroughOverlay?: boolean;
    navigationAdapter?: () => NavigationAdapter;
    disableConsoleLogs?: boolean;
    scrollToTop?: boolean;
    noInViewScroll?: boolean;
}
export interface CardComponentProps {
    step: Step;
    currentStep: number;
    totalSteps: number;
    nextStep: () => void;
    prevStep: () => void;
    skipTour?: () => void;
    arrow: JSX.Element | null;
}
