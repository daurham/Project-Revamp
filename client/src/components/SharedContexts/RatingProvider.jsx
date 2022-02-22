import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';

import axios from 'axios';
import { useData } from '../SharedContexts/DataProvider';

const RatingContext = React.createContext();

export function useRatingData() {
  return useContext(RatingContext);
}

function RatingProvider({ children }) {
  const { productId } = useData();
  const { characteristics } = useData();
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState(null);
  // const [helpful, setHelpful] = useState(0);

  function getReviews(productId) {
    const query_params = {product_id: productId}
    axios.get('/reviews', {params: query_params})
    .then((response) => setReviews(response.data));
  }

  function addReviews(review) {
    review.product_id = productId
    review.rating = 2
    console.log(JSON.stringify(review))
    axios.post('/reviews', review)
    .then((response) => {
      console.log('setReaviews', response)
      setReviews([...reviews], response.data)
    })
    .catch((error) => console.error(error));
  }

  function updateHelpful(review_id) {
    // const query_params = {review_id: reviewId}
    axios.put(`/reviews/${review_id}/helpful`)
    .then((response) => {
      getReviews(productId)
    })
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    if (reviews.length === 0) {
      getReviews(productId)
    }
  }, [productId]);

  useEffect(() => {
    const query_params = {product_id: productId}
    axios.get('/reviews/meta', {params: query_params})
    .then((response) => setMeta(response.data))
  }, [productId])

  const value = useMemo(() => ({
    reviews, meta, getReviews, addReviews, updateHelpful
  }), [reviews, meta]);

  return (
    <RatingContext.Provider value={value}>
      {children}
    </RatingContext.Provider>
  );
}

export default RatingProvider;
