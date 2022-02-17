import React from 'react';
import css from '../App.css';
import cssReviews from './Reviews.css';

function ReviewsList({review}) {
  // console.log(review)
  return (
    <div className={cssReviews.container}>
      <h2 className={css.sub_title}>{review.summary}</h2>
      <p className={css.para_md}>Review: {review.body}</p>
      {/* <p>recommend: {review.recommend}</p> */}
      {/* <p>rating: {review.rating}</p> */}
      <p className={css.para_sm}>Date: {review.date}</p>
    </div>
  )
}

export default ReviewsList;