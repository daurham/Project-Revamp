import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';

import axios from 'axios';
import { useData } from '../Context/DataProvider';

const RatingContext = React.createContext();

export function useRatingData() {
  return useContext(RatingContext);
}

function RatingProvider({ children }) {
  const { productId } = useData();

  const [reviews, setReviews] = useState([]);

  function getReviews(productId) {
    const query_params = {product_id: productId}
    axios.get('/reviews', {params: query_params})
    .then((response) => setReviews(response.data));
  }

  useEffect(() => {
    if (reviews.length === 0) {
      getReviews(productId)
    }

  }, [productId]);

  const value = useMemo(() => ({
    reviews, getReviews
  }), [reviews]);

  return (
    <RatingContext.Provider value={value}>
      {children}
    </RatingContext.Provider>
  );
}

export default RatingProvider;
