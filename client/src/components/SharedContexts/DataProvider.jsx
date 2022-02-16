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
  const [productId, setProductId] = useState(null);

  function updateID(id) {
    console.log('updateid hit');
    setProductId(id);
  }

  // useEffect to get single product after first render only
  useEffect(() => (
    axios.get('/products')
      .then((result) => {
        const { data } = result;
        const { id } = data[0];
        setProductId(id);
      })
  ), []);

  // setting items to pass into context provider
  const value = useMemo(() => ({
    productId, setProductId, updateID,
  }), [productId]);

  return (
    // passing context value to all children within app.jsx
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}
// this DataProvider to be used in app.jsx
export default DataProvider;
