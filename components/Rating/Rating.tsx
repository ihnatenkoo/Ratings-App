import { useEffect, useState, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import StarIcon from './Star.svg';
import cn from 'classnames';
import styles from './Rating.module.css';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((elem: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(event: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, event)
            }
          />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  const changeDisplay = (rating: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(rating);
  };

  const onClick = (rating: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(rating);
  };

  const handleSpace = (i: number, event: KeyboardEvent<SVGElement>) => {
    if ((event.code != 'Space' && event.code != 'Enter') || !setRating) {
      return;
    }

    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((element, i) => (
        <span key={i}>{element}</span>
      ))}
    </div>
  );
};
