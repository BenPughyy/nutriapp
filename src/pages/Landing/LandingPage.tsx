import { FC } from 'react';

// Components
import LoginButton from '../../components/LoginButton/LoginButton';
import StarRating from '../../components/StarRating/StarRating';

const LandingPage: FC = () => {
  return (
    <>
      <LoginButton />
      <StarRating /> {/* Have left this in so you can have a gander*/}
    </>
  );
};

export default LandingPage;
