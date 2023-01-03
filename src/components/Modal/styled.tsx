import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => `${theme.colors.system.offBlack}CC`};
  z-index: 999;
`;

export const Wrapper = styled.div<{
  showModal: boolean;
  scrollable?: boolean;
  fullScreen?: boolean;
}>`
  display: flex;

  max-width: 25%;
  max-height: 95%;

  ${({ fullScreen }) =>
    fullScreen &&
    `width: 1400px;
    max-width: 95%;
    height: 2000px;
    max-height: 50%;
  `};

  overflow-y: ${({ scrollable }) => (scrollable ? 'auto' : 'visible')};

  background-color: ${({ theme }) => theme.colors.system.white};
  padding: ${({ theme, fullScreen }) => !fullScreen && theme.padding.large};

  border: 1px solid ${({ theme }) => theme.colors.system.grey};
  border-radius: ${({ theme }) => theme.borders.radius};

  opacity: ${({ showModal }) => (showModal ? 1 : 0)};

  transition: opacity 0.5s;
`;
