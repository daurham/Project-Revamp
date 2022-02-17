import React from 'react';
import css from './Reviews.css';
import StarRating from '../SharedComponents/StarRating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      <p>{review.reviewer_name}</p>
      {review.helpfulness > 0 ? <p>Helpful? Yes: {review.helpfulness}</p> : null }
      {review.recommend ? <p>✔ I recommend this product </p> : null}
      <p className={css.para_sm}>Date: {americanDate}</p>
    </div>
  )
}

export default ReviewsList;