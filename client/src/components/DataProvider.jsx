import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
import axios from 'axios';

const DataContext = React.createContext();

// setting custom hook for the context created
export function useData() {
  return useContext(DataContext);
}
// eslint error here: specifying propTypes. we need another module, i'm thinking ignore for now?
function DataProvider({ children }) {
  // setting state to one random product, id: 40344
  const [product, setProduct] = useState();

  // Network Requests
  function getProduct(productID) {
    axios.get(`/products/${productID}`)
      .then((result) => {
        // console.log('product: ', result.data);
        // console.log('product: ', product.id);
        setProduct(result.data);
      })
      .catch((err) => console.log(err));
  }

  // useEffect to get single product after first render only
  useEffect(() => (
    getProduct(40345)
  ), []);

  // setting items to pass into context provider
  const value = useMemo(() => ({
    product, getProduct,
  }), [product]);

  return product ? (
    // passing context value to all children within app.jsx
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
    : (
      <div />
    );
}
// this DataProvider to be used in app.jsx
export default DataProvider;
