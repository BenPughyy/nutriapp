import { FC } from 'react';
import * as SC from './styled';

// Components
import { Button } from '../../main/theme';

const NotFoundPage: FC = () => {
  return (
    <SC.PageContainer>
      <SC.InformationWrapper>
        <SC.ItemContainer>
          <SC.SpecificallyStyledH1>
            Whoops, something went wrong...
          </SC.SpecificallyStyledH1>
        </SC.ItemContainer>
        <SC.SpecificallyStyledH1>
          Please try again later, or contact us to make us aware of the issue
        </SC.SpecificallyStyledH1>
        <SC.SpecificallyStyledH1>
          Or you can go straight back to the dashboard by clicking the button
          below
        </SC.SpecificallyStyledH1>
        <Button>
          <SC.StyledLink to="/">Back to dashboard</SC.StyledLink>
        </Button>
      </SC.InformationWrapper>
    </SC.PageContainer>
  );
};

export default NotFoundPage;
