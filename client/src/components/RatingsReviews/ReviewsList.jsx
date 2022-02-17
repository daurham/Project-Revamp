import React from 'react';
import css from './Reviews.css';
import StarRating from '../SharedComponents/StarRating';

function ReviewsList({review}) {
  const isoString = new Date().toISOString();

  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(review.date);
  const americanDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <div className={css.container}>
      <StarRating value={review.rating}/>
      <h2 className={css.sub_title}>{review.summary}</h2>
      <p className={css.para_md}>Review: {review.body}</p>
      {/* <p>recommend: {review.recommend}</p> */}
      {/* <p>rating: {review.rating}</p> */}
      <p className={css.para_sm}>Date: {americanDate}</p>

    </div>
  )
}

export default ReviewsList;