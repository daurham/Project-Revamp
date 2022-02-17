import React, { useEffect, useRef } from 'react';
import css from './Reviews.css';
import { useRatingData } from './RatingProvider';
import { useData } from '../Context/DataProvider';
import ReviewsList from './ReviewsList';

function Reviews() {
  const { productId } = useData()
  const { reviews, getReviews } = useRatingData()

  return reviews.length !== 0 ? (
    <div className={css.container}>
      <div className={css.reviews}>
        {reviews.results.map((review, id, summary, rating, recommend, body, date, photos) => (
          <ReviewsList review={review} key={id} />))}
      </div>
      <div className={css.buttons}>
          <button>More Reviews</button>
          <button>Add a Review</button>
      </div>
    </div>
  ) : <div>Loading</div>
}

export default Reviews;