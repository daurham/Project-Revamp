import React, { useState, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useData } from '../SharedContexts/DataProvider';
import { useRatingData } from '../SharedContexts/RatingProvider';

function StarsRating({ value, productId, showAverage, relatedProduct, currentProduct }) {
  let metaOutside;
  if (currentProduct) {
    const { meta } = useRatingData();
    metaOutside = meta;
  }
  const [results, setResults] = useState(null);
  // console.log('meta', meta)
  const [average, setAverage] = useState(0);

  // ----- Austin's copy pasta ----
  if (relatedProduct) {
    useEffect(() => {
      const query = { product_id: relatedProduct };
      axios.get('/reviews/meta/ratings', { params: query })
        .then((response) => {
          setResults(response.data);
        });
      return setResults();
    }, [productId]);
  }

  // console.log('meta', metaOutside)

  if (currentProduct) {
    // console.log('meta in if b4 useEff', metaOutside)
    useEffect(() => {
      if (metaOutside && typeof metaOutside === 'object') {
        setResults(metaOutside.ratings)
      }
    }, [metaOutside])
  }

  function calcPercent() {
    if (results) {
      const entries = Object.entries(results);
      let total = 0;
      let submits = 0;
      // eslint-disable-next-line no-restricted-syntax
      for (let [key, val] of entries) {
        key = Number(key);
        val = Number(val);
        total += (key * val);
        submits += val;
      }
      const avg = total / submits;

      setAverage(avg.toFixed(1));
      return Math.round((avg / 5) * 100, 2);
    }
  }
  const percent = useMemo(() => calcPercent(), [results]);

  const styleStar = {
    width: `${percent}%`,
  };

  const StarRatingContainer = styled.div`
  unicode-bidi: bidi-override;
  color: #363636bf;
  width: ${relatedProduct ? '75px' : 'max-width'};
  font-size: ${relatedProduct && '15px'};
  height: ${relatedProduct ? '15px' : 'auto'};
  margin: ${!relatedProduct && '0 auto'};
  position: relative;
  padding: 0;
  text-shadow: 0px 1px 0 #a2a2a2;
`;

  return (
    <Container>
      {showAverage ? <h1>{average}</h1> : null}
      <StarRatingContainer>
        <StarRatingTop style={styleStar}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </StarRatingTop>
        <StarRatingBottom>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </StarRatingBottom>
      </StarRatingContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const StarRatingTop = styled.div`
  color: #f1e312;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
`;
const StarRatingBottom = styled.div`
  padding: 0;
  display: block;
  z-index: 0;
`;

export default StarsRating;
