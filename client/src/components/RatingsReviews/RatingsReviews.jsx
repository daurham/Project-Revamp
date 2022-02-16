import React from 'react';
import cssMain from './RatingsReviews.css';
import StarRating from '../SharedComponents/StarRating';
import RatingProvider from './RatingProvider';
import Reviews from './Reviews';

function RatingsReviews() {
  return (
    <RatingProvider>
      <div className={cssMain.container}>
        <div className={cssMain.box_one}>
          <StarRating />
        </div>
        <div className={cssMain.box_three}>
          <Reviews />
        </div>
      </div>
    </RatingProvider>

  );
}

export default RatingsReviews;
