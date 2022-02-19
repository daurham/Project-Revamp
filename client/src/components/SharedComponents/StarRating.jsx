import axios from 'axios';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import css from './StarRating.css';

function StarsRating({ value, productId, showAverage, relatedProduct }) {
  console.log('productId from SR', productId);
  const [results, setResults] = useState(null);

  const [average, setAverage] = useState(0);
  // const [percentage, setPercentage] = useState((value * 100) / 5);
  // const [percentage, setPercentage] = useState();
  // const [runOnce, setRunOnce] = useState(true);

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

  // ---- use correct endpoint for averages ----
  if (relatedProduct) {
    console.log('relatedproduct trigger');
    useEffect(() => {
      const query = { product_id: relatedProduct };
      axios.get('/reviews/meta/ratings', { params: query })
        .then((response) => {
          setResults(response.data);
        });
      return setResults();
    }, [productId]);
  }

  function calcPercent() {
    // if (results && results.length !== 0) {
    if (results) {

      // console.log('results in calcpercent', results)
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
      // console.log(total, submits);
      const avg = total / submits;
      // if (showAverage) {
        // const rounded = Math.round((avg * 100) / 100);
        setAverage(avg.toFixed(1));
      // }
      // console.log(avg);
      return Math.round((avg / 5) * 100, 2);
    }
  }

  const percent = useMemo(() => calcPercent(), [results]);








  // ---- using wrong endpoint ------

  // useEffect(() => {
  //   const query = { product_id: productId };
  //   axios.get('/reviews', { params: query })
  //     .then((response) => {
  //       console.log('result data', response.data.results);
  //       const data = response.data.results;
  //       setResults(data);
  //     });
  //   return setResults();
  // }, [productId]);

  // function calcPercent() {
  //   if (results && results.length !== 0) {
  //     console.log('results in calcpercent', results)
  //     const mapped = results.map((item) => item.rating);
  //     const sum = mapped.reduce((a, b) => (a + b));
  //     const avg = sum / mapped.length;
  //     return Math.round((avg / 5) * 100);
  //   }
  // }

  // const percent = useMemo(() => calcPercent(), [results]);

  // --------- random code ------------

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
// className={css.container}
  return (
    <div >
      {/* {displayAverage && <h1>{average}</h1>} */}
      <h1>{average}</h1>

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



// ----- bee's working component did it with her -----

// import React, { useState, useEffect, useRef, useMemo } from 'react';
// import { useData } from '../Context/DataProvider';
// import { useRatingData } from '../RatingsReviews/RatingProvider';
// import styled from 'styled-components';
// import axios from 'axios';

// function StarsRating({ value, productId, showAverage, relatedProduct, currentProduct }) {
//   // const { productId } = useData();
//   const { reviews, getReviews, meta } = useRatingData()
//   const [results, setResults] = useState(null);
//   console.log('meta', meta)
//   const [average, setAverage] = useState(0)
//   // const [percentage, setPercentage] = useState(0)
//   // const [rating, setRating] = useState(0)
//   // const [displayAverage, setDisplayAverage] = useState(showAverage);
//   // const isMounted = useRef(false);

//   // ----- Austin's copy pasta ----
//   if (relatedProduct) {
//     useEffect(() => {
//       const query = { product_id: relatedProduct };
//       axios.get('/reviews/meta', { params: query })
//         .then((response) => {
//           setResults(response.data);
//         });
//       return setResults();
//     }, [productId]);
//   }

//   if (currentProduct) {
//     useEffect(() => {
//       if (meta && typeof meta === 'object') {
//         setResults(meta.ratings)
//       }
//     }, [meta])
//   }

//   function calcPercent() {
//     if (results) {
//       const entries = Object.entries(results);
//       let total = 0;
//       let submits = 0;
//       // eslint-disable-next-line no-restricted-syntax
//       for (let [key, val] of entries) {
//         key = Number(key);
//         val = Number(val);
//         total += (key * val);
//         submits += val;
//       }
//       const avg = total / submits;

//       setAverage(avg.toFixed(1));
//       return Math.round((avg / 5) * 100, 2);
//     }
//   }
//   const percent = useMemo(() => calcPercent(), [results]);

//   const styleStar = {
//     width: `${percent}%`,
//   };

//   return (
//     <>
//       <Container>
//         {/* {displayAverage ? <h1>{average}</h1> : null} */}
//         <StarRatingContainer>
//           <StarRatingTop style={styleStar}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></StarRatingTop>
//           <StarRatingBottom><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></StarRatingBottom>
//         </StarRatingContainer>
//       </Container>
//     </>
//   )
// }

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// `
// const StarRatingContainer = styled.div`
//   unicode-bidi: bidi-override;
//   color: #363636bf;
//   width: 70px;
//   margin: 0 auto;
//   position: relative;
//   padding: 0;
//   text-shadow: 0px 1px 0 #a2a2a2;
// `
// const StarRatingTop = styled.div`
//   color: #f1e312;
//   padding: 0;
//   position: absolute;
//   z-index: 1;
//   display: block;
//   top: 0;
//   left: 0;
//   overflow: hidden;
// `
// const StarRatingBottom = styled.div`
//   padding: 0;
//   display: block;
//   z-index: 0;
// `

// export default StarsRating;

