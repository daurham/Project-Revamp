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
  const [filterRating, setFilterRating] = useState(null);

  console.log(filterRating, 'filter rating from provider')
  function getReviews() {
    const query_params = {product_id: productId, count: 100, sort: "newest"}
    axios.get('/reviews', {params: query_params})
    .then((response) => setReviews(response.data))
    .catch((error)=>{console.log('get error',error)});
  }

  function addReviews(review) {
    review.product_id = productId;
    console.log('addreview from provider',review)
    axios.post('/reviews', review)
    .then(()=>{getReviews()})
    .catch((error) => console.error('add error',error));
  }

  function updateHelpful(review_id) {
    // const query_params = {review_id: reviewId}
    axios.put(`/reviews/${review_id}/helpful`)
    .then((response) => {
      getReviews(productId)
    })
    .catch((error) => console.error(error))
  }
  function filterRatingFunc(filter_rating) {
    setFilterRating(filter_rating);
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
    reviews, meta, getReviews, addReviews, updateHelpful, filterRatingFunc
  }), [reviews, meta]);

  return reviews, meta ? (
    <RatingContext.Provider value={value}>
      {children}
    </RatingContext.Provider>
  ) : null;
}

export default RatingProvider;
