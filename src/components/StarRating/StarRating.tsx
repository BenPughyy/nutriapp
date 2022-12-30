import { FC, useState } from 'react';
import { Rating } from 'semantic-ui-react';

const StarRating: FC = () => {
  const [ratingState, setRatingState] = useState<number>();

  // This will set the 'ratingState' to whatever the user clicked
  // Ready to get sent with redux
  const handleRating = (data: number) => {
    setRatingState(data);
  };

  return (
    <Rating
      icon="star"
      defaultRating={0}
      maxRating={5}
      size="massive"
      onRate={(event, data) => handleRating(data.rating as number)}
    />
  );
};

export default StarRating;
