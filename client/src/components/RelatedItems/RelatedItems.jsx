import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import custom hook created on line 9 of DataProvider
import { useData } from '../DataProvider';

function RelatedItems() {
  const { productId } = useData();
  const { updateID } = useData();
  const [relatedItemsInfo, setRelatedItemsInfo] = useState([]);

  useEffect(() => (
    axios.get(`/products/${productId}/related`)
      .then((result1) => {
        console.log('res1', result1.data);
        result1.data.forEach((item) => {
          console.log(item);
          axios.get(`/products/${item}/relatedinfo`)
            .then((result2) => setRelatedItemsInfo((prevItems) => prevItems.concat(result2.data)));
        });
      })
  ), [productId]);

  return (
    <div>
      Display Product Name:&nbsp;
      <button type="button" onClick={() => getProductId()}> Get Another Product Name </button>
    </div>
  );
}

export default RelatedItems;
