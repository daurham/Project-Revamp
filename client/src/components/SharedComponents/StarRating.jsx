import React, { useState, useEffect, useRef } from 'react';
import css from './StarRating.css';
import { useData } from '../Context/DataProvider';
import { useRatingData } from '../RatingsReviews/RatingProvider';

function StarsRating({value}) {
  console.log('value',value)
  const { productId } = useData();
  const { reviews, getReviews } = useRatingData()

  const [average, setAverage] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [rating, setRating] = useState(0)
  const isMounted = useRef(false);

  if (isMounted.current && productId) {
    let mapped = reviews.results.map((item) => {
      return item.rating
    })
    const sum = mapped.reduce((a, b) => (a + b))
    const avg = sum / mapped.length;
    const percent = Math.round((avg / 5) * 100)

    setPercentage(percent)
    setAverage(avg)

    isMounted.current = false;
  } else {
    isMounted.current = true;
  }

  const getValue = () => {
    console.log('here', value)
    const percent = value * 100 / 5;
    setRating(value)
    setPercentage(percent)
    console.log(percentage)
  }

  useEffect(() => {
    getValue()
    isMounted.current = false;
  }, [percentage])

  const styleStar = {
    width: `${[percentage]}%`
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