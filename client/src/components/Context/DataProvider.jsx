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

  function updateID(id) {
    setProductId(id);
  }

  useEffect(() => (
    axios.get('/products')
      .then((result) => {
        const { data } = result;
        const { id } = data[0];
        setProductId(id);
      })
  ), []);

  const value = useMemo(() => ({
    productId, updateID,
  }), [productId]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
