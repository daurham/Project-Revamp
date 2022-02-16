import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
// import custom hook created on line 9 of DataProvider
import axios from 'axios';
import { useData } from './DataProvider';

const OverviewContext = React.createContext();

export function useOverview() {
  return useContext(OverviewContext);
}

function OverviewProvider({ children }) {
  const { productId } = useData();

  const [prodDetails, setProdDetails] = useState({});
  const [prodStyles, setProdStyles] = useState([]);

  useEffect(() => {
    axios.get(`/products/${productId}`)
      .then((result1) => setProdDetails(result1.data));

    axios.get(`/products/${productId}/styles`)
      .then((result2) => {
        // result2.data.results.forEach((item) => {
        //   setProdStyles((prevItems) => prevItems.concat(item));
        // });
        setProdStyles(result2.data.results);
      });
  }, [productId]);

  const value = useMemo(() => ({
    prodDetails, prodStyles,
  }), [prodDetails, prodStyles]);

  return (
    <OverviewContext.Provider value={value}>
      {children}
    </OverviewContext.Provider>
  );
}

export default OverviewProvider;
