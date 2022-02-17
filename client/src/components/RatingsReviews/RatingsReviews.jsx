import React from 'react';
import cssRev from './RatingsReviews';
import StarRating from '../SharedComponents/StarRating';
import RatingProvider from './RatingProvider';
import Reviews from './Reviews';

function RatingsReviews() {
  return (
    <>
      <RatingProvider>
        <div className={cssRev.containerDiv}>
          <p className={cssRev.title}>Ratings and Reviews</p>
          <div className={cssRev.box_one}>
            <StarRating />
          </div>
          <div className={cssRev.box_two}>
            <Reviews />
          </div>
        </div>
      </RatingProvider>

    </>
  );
}

export default RatingsReviews;
