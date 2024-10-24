// react-animated-numbers.d.ts
declare module 'react-animated-numbers' {
    import { ComponentType } from 'react';
  
    interface AnimatedNumberProps {
      animateToNumber: number;
      includeComma?: boolean;
      locale?: string;
      className?: string;
      configs?: (value: number, index: number) => {
        mass?: number;
        tension?: number; // Make sure this is 'tension', not 'tensions'
        friction?: number;
      };
    }
  
    const AnimatedNumber: ComponentType<AnimatedNumberProps>;
  
    export default AnimatedNumber;
  }
  