import axios from 'axios';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import css from './StarRating.css';

function StarsRating({ value, productId, showAverage }) {
  console.log('productId from SR', productId);
  const [results, setResults] = useState(null);

  // const [average, setAverage] = useState(0);
  // const [percentage, setPercentage] = useState((value * 100) / 5);
  const [percentage, setPercentage] = useState();
  const [runOnce, setRunOnce] = useState(true);

  // const [displayAverage, setDisplayAverage] = useState(showAverage);
  // const isMounted = useRef(false);
  // const data = useMemo(async () => {
  //   const query = { product_id: productId };
  //   await axios.get('/reviews', { params: query })
  //     .then((response) => {
  //       console.log('result data', response.data.results);
  //       return response.data.results;
  //       // setResults(data1);
  //     });
  // }, [productId]);

  useEffect(() => {
    const query = { product_id: productId };
    axios.get('/reviews', { params: query })
      .then((response) => {
        console.log('result data', response.data.results);
        const data = response.data.results;
        setResults(data);
      });
    return setResults();
  }, [productId]);

  function calcPercent() {
    if (results && results.length !== 0) {
      console.log('results in calcpercent', results)
      const mapped = results.map((item) => item.rating);
      const sum = mapped.reduce((a, b) => (a + b));
      const avg = sum / mapped.length;
      return Math.round((avg / 5) * 100);
    }
  }

  const percent = useMemo(() => calcPercent(), [results]);

  // if (results && runOnce) {
  //   setRunOnce(false);
  //   console.log('results here', results);
  // }

  // useEffect(() => {
  //   if (results) {
  //     // const mapped = results.map((item) => item.rating);
  //     // const sum = mapped.reduce((a, b) => (a + b));
  //     // const avg = sum / mapped.length;
  //     // const percent = Math.round((avg / 5) * 100);
  //     setPercentage(percent);
  //   }
  // }, [runOnce]);

  // if (results) {
  // useEffect(() => {
  //   console.log('results here', results);
  //   const mapped = results.map((item) => item.rating);
  //   const sum = mapped.reduce((a, b) => (a + b));
  //   const avg = sum / mapped.length;
  //   const percent = Math.round((avg / 5) * 100);

  //   setPercentage(percent);
    // setAverage(avg);
    // setDisplayAverage(true);
  // }, [results]);
  // }

  // if (isMounted.current && productId) {
  // if (productId) {
  //   const mapped = results.map((item) => item.rating);
  //   const sum = mapped.reduce((a, b) => (a + b));
  //   const avg = sum / mapped.length;
  //   const percent = Math.round((avg / 5) * 100);

  //   setPercentage(percent);
  //   setAverage(avg);
  //   setDisplayAverage(true);
  //   isMounted.current = false;
  // } else {
  //   isMounted.current = true;
  // }

  const styleStar = {
    // width: `${[percentage]}%`,
    width: `${[percent]}%`,

  };

  return (
    <div className={css.container}>
      {/* {displayAverage && <h1>{average}</h1>} */}
      <div className={css.star_ratings_css}>
        <div className={css.star_ratings_css_top} style={styleStar}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <div className={css.star_ratings_css_bottom}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
    </div>
  );
}

export default StarsRating;
