import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
import axios from 'axios';

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

function DataProvider({ children }) {
  const [productId, setProductId] = useState(null);

  function updateID() {
    setProductId((id) => id + 1);
  }

  useEffect(() => (
    axios.get('/products')
      .then((result) => {
        const { data } = result;
        console.log('data: ', result);
        const { id } = data[0];
        setProductId(id);
      })
  ), []);

  const value = useMemo(() => ({
    productId, updateID,
  }), [productId]);

  return !productId ? null :(
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
