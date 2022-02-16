import React from 'react';
import css from './RatingsReviews.css';

function RatingsReviews() {
  return (
    <div className={cssMain.container}>
      {/* <div className={cssMain.box_one}>
        <StarsRating /> */}
      </div>
      <div className={cssMain.box_three}>
        {/* {reviews.results.map((review, id, summary, rating, recommend, body, date, photos) => (
          <Reviews review={review} key={id} />))} */}
      </div>
    </div>
  );
}

export default RatingsReviews;
