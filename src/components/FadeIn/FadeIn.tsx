import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

interface FadeInProps {
  duration?: number;
  delay?: number;
  children?: any;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeIn: FC<FadeInProps> = ({
  duration = 300,
  delay = 0,
  children,
  ...delegated
}) => {
  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated['style'] || {}),
        animationDuration: duration + 'ms',
        animationDelay: delay + 'ms',
      }}
    >
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  z-index: 999;
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;
export default FadeIn;
