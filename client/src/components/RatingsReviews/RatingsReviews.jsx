import React from 'react';
import cssRate from './RatingsReviews.css';
import StarRating from '../SharedComponents/StarRating';
import RatingProvider from './RatingProvider';
import Reviews from './Reviews';

function RatingsReviews() {
  return (
    <>
      <RatingProvider>
        <div className={cssRate.container}>
          <div className={cssRate.box_one}>
            <span>rating</span>
            <StarRating />
          </div>
          <div className={cssRate.box_two}>
            <Reviews />
          </div>
        </div>
      </RatingProvider>

    </>
  );
}

export default RatingsReviews;
