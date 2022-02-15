import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
// import custom hook created on line 9 of DataProvider
import axios from 'axios';
import { useData } from '../DataProvider';


function Gallery() {
  const { productId } = useData();
  const { getProductId } = useData();

  const [prodDetails, setProdDetails] = useState()

  function getProduct() {
    axios.get(`/products/${productId}`)
      .then((result) => {
        const { data } = result;
        setProdDetails(data);
      });
  }

  return (
    <div>
      {productId}
    </div>
  );
}

export default Gallery;
