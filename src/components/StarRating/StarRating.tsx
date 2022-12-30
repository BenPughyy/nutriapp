import { FC, useState } from 'react';
import { Rating } from 'semantic-ui-react';

const StarRating: FC = () => {
  const [ratingState, setRatingState] = useState<any>();

  // This will set the 'ratingState' to whatever the user clicked
  // Ready to get sent with redux
  const handleRating = (data) => {
    setRatingState(data);
  };

  return (
    <Rating
      icon="star"
      defaultRating={0}
      maxRating={5}
      size="massive"
      onRate={(event, data) => handleRating(data.rating)}
    />
  );
};

export default StarRating;
