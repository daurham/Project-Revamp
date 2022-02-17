import React, { useEffect, useRef } from 'react';
// import css from '../App.css';
// import cssReviews from './Reviews.css';
import { useRatingData } from './RatingProvider';
import { useData } from '../Context/DataProvider';

function Reviews() {
  const { productId } = useData()
  const { reviews, getReviews } = useRatingData()
  // if (reviews.length !== 0) {
  //   getReviews(productId)
  // } else {
  //   return;
  // }

  // useEffect(() => {
  //   getReviews(productId)
  // }, [productId]);

  console.log(reviews,productId)
  return (
    <div>
       <button type="button" onClick={() => getReviews(productId)}> Reviews</button>
{/*
      {reviews.results.map((review, id, summary, rating, recommend, body, date, photos) => (
        <Reviews review={review} key={id} />))} */}

    </div>
  )
}

export default Reviews;