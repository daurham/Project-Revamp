import React, { useState, useEffect, useRef } from 'react';
import { useData } from '../Context/DataProvider';
import { useRatingData } from '../RatingsReviews/RatingProvider';
import styled from 'styled-components';

function StarsRating({ value, productID, showAverage }) {
  const { productId } = useData();
  const { reviews, getReviews } = useRatingData()

  const [average, setAverage] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [rating, setRating] = useState(0)
  const [displayAverage, setDisplayAverage] = useState(showAverage);
  const isMounted = useRef(false);


  if (isMounted.current && productId) {
    let mapped = reviews.results.map((item) => {
      return item.rating;
    });
    const sum = mapped.reduce((a, b) => (a + b));
    const avg = sum / mapped.length;
    const percent = Math.round((avg / 5) * 100);

    setPercentage(percent);
    setAverage(avg);
    setDisplayAverage(true);
    isMounted.current = false;
  } else {
    isMounted.current = true;
  }

  const getValue = () => {
    const percent = value * 100 / 5;
    setRating(value);
    setPercentage(percent);
  }

  useEffect(() => {
    getValue();
    isMounted.current = false;
  }, [percentage], [displayAverage]);

  const styleStar = {
    width: `${percentage}%`
  };

  return (
    <>
      <Container>
        {showAverage ? <h1>{average}</h1> : null}
        <StarRatingContainer>
          <StarRatingTop style={styleStar}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></StarRatingTop>
          <StarRatingBottom><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></StarRatingBottom>
        </StarRatingContainer>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const StarRatingContainer = styled.div`
  unicode-bidi: bidi-override;
  color: #363636bf;
  width: 70px;
  margin: 0 auto;
  position: relative;
  padding: 0;
  text-shadow: 0px 1px 0 #a2a2a2;
`
const StarRatingTop = styled.div`
  color: #f1e312;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
`
const StarRatingBottom = styled.div`
  padding: 0;
  display: block;
  z-index: 0;
`

export default StarsRating;

