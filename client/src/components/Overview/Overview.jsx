import React, {
  useState, useEffect,
} from 'react';
// import custom hook created on line 9 of DataProvider
import axios from 'axios';
import { useData } from '../DataProvider';

function Overview() {
  const { productId } = useData();
  // console.log('g prodID', productId)

  const [prodDetails, setProdDetails] = useState({});

  // function getProduct() {

  // }

  useEffect(() => {
  //   getProduct();
    axios.get(`/products/${productId}`)
      .then((result) => {
        // const { data } = result;
        console.log('result.data', result.data)
        setProdDetails(result.data);
      });
  }, [productId]);

  return (
    <div>
      {prodDetails.name}
    </div>
  );
}

export default Overview;
