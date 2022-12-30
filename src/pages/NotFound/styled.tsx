import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import { StyledH1 } from '../../main/theme';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.margin.xxxxxlarge};
  height: 100vh;
`;

export const ItemContainer = styled.div`
  display: flex;
`;

export const LogoContainer = styled.img`
  display: flex;
  margin: ${({ theme }) => theme.margin.xxxxxlarge} 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-emphasis: none;
  color: black;
  &:hover {
    text-emphasis: none;
    text-decoration: none;
    color: black;
  }
`;

export const SpecificallyStyledH1 = styled(StyledH1)`
  color: ${({ theme }) => theme.colors.general.black};
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.padding.standard};
  gap: inherit;
  background-color: ${({ theme }) => theme.colors.system.grey};
  border-radius: ${({ theme }) => theme.borders.radius};
`;
