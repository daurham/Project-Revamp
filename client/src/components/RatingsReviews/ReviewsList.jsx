import React from 'react';
import css from '../App.css';
import cssReviews from './Reviews.css';
import StarRating from '../SharedComponents/StarRating';

function ReviewsList({review}) {
  console.log(review.rating)
  return (
    <div className={cssReviews.container}>
      <StarRating value={review.rating}/>
      <h2 className={css.sub_title}>{review.summary}</h2>
      <p className={css.para_md}>Review: {review.body}</p>
      {/* <p>recommend: {review.recommend}</p> */}
      {/* <p>rating: {review.rating}</p> */}
      <p className={css.para_sm}>Date: {review.date}</p>
    </div>
  )
}

export default ReviewsList;