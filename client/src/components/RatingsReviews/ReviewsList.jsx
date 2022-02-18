import React from 'react';
import css from '../App.css';
import StarRating from '../SharedComponents/StarRating';

function ReviewsList({review}) {
  const isoString = new Date().toISOString();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = new Date(review.date);
  const americanDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <div>
      <StarRating value={review.rating}/>
      <h2 className={css.sub_title}>{review.summary}</h2>
      <p className={css.para_md}>{review.body}</p>
      {review.helpfulness > 0 ? <p className={css.para_sm}>Helpful? Yes: {review.helpfulness}</p> : null }
      {review.recommend ? <p className={css.para_sm}>✔ I recommend this product </p> : null}
      <p className={css.para_sm}>{review.reviewer_name}</p>
      <p className={css.para_sm}>{americanDate}</p>
    </div>
  )
}

export default ReviewsList;