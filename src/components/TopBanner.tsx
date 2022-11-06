import { FC } from 'react';
import { Header } from 'semantic-ui-react';
import * as SC from './styled';

const TopBanner: FC = () => {
  return (
    <SC.HeaderContainer>
      <SC.StyledHeader as="h1">Nutri App</SC.StyledHeader>
    </SC.HeaderContainer>
  );
};

export default TopBanner;
