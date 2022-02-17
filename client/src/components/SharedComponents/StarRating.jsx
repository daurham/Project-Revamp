import React, { useState, useEffect, useRef } from 'react';
import css from './StarRating.css';
import { useData } from '../Context/DataProvider';
import { useRatingData } from '../RatingsReviews/RatingProvider';

function StarsRating() {
  const { productId } = useData();
  const { reviews, getReviews } = useRatingData()

  const [average, setAverage] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const isMounted = useRef(false);

  if (isMounted.current) {
    console.log('reviews',reviews)
    let mapped = reviews.results.map((item) => {
      return item.rating
    })
    const sum = mapped.reduce((a, b) => (a + b))
    const avg = sum / mapped.length;
    let percent = Math.round((avg / 5) * 100)

    setPercentage(percent)
    setAverage(avg)

    isMounted.current = false;
  } else {
    isMounted.current = true;
  }
  // console.log('average',average, 'percentage', percentage)

  const styleStar = {
    width: `${percentage}%`
  }

  return (
    <>
      {/* <h1>{average}</h1> */}
      <div className={css.star_ratings_css}>
        <div className={css.star_ratings_css_top} style={styleStar}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <div className={css.star_ratings_css_bottom}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
      </div>
    </>
  )
}

export default StarsRating;