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

  function getReviews(productId) {
    const query_params = {product_id: productId}
    axios.get('/reviews', {params: query_params})
    .then((response) => setReviews(response.data));
  }

  /*{
	"product_id": 40344,
	"rating": 4,
	"characteristics": {
		"135221": 5
	}
} */
  function addReviews(review) {
    review.product_id = productId
    review.rating = 2
    console.log(JSON.stringify(review))
    axios.post('/reviews', review)
    .then((response) => {
      console.log('POST reviews WORKED----rating provider', response.data)
      // setReviews([...reviews], response.data)
    })
    .catch((error) => console.error(error));
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
    reviews, meta, getReviews, addReviews
  }), [reviews, meta]);

  return (
    <RatingContext.Provider value={value}>
      {children}
    </RatingContext.Provider>
  );
}

export default RatingProvider;
