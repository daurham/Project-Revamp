import React from 'react';
import cssMain from './RatingsReviews.css';
import StarRating from '../SharedComponents/StarRating';
import RatingProvider from './RatingProvider';

function RatingsReviews() {
  return (
    <RatingProvider>
      <div className={cssMain.container}>
      <div className={cssMain.box_one}>
        <StarRating />
      </div>
      <div className={cssMain.box_three}>
        {/* {reviews.results.map((review, id, summary, rating, recommend, body, date, photos) => (
          <Reviews review={review} key={id} />))} */}
      </div>
    </div>
    </RatingProvider>

  );
}

export default RatingsReviews;
