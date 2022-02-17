import React, { useEffect, useRef } from 'react';
import css from '../App.css';
import cssReviews from './Reviews.css';
import { useRatingData } from './RatingProvider';
import { useData } from '../Context/DataProvider';
import ReviewsList from './ReviewsList';

function Reviews() {
  const { productId } = useData()
  const { reviews, getReviews } = useRatingData()

  console.log(reviews,productId)

  return reviews.length !== 0 ? (
    <div>
       <button type="button" onClick={() => getReviews(productId)}> Reviews</button>

      {reviews.results.map((review, id, summary, rating, recommend, body, date, photos) => (
        <ReviewsList review={review} key={id} />))}
    </div>
  ) : <div>Loading</div>
}

export default Reviews;