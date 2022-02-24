import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
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
  const [currentStyleId, setCurrentStyleId] = useState();
  const [currentStyle, setCurrentStyle] = useState();

  // console.log('ProdID', productId)
  // console.log('prodDetails', prodDetails)
  // console.log('prodStyles', prodStyles)
  // console.log('currentStyleID', currentStyleId)
  // console.log('currentStyle', currentStyle)

  useEffect(() => {
    axios.get(`/products/${productId}`)
      .then((result1) => setProdDetails(result1.data));

    axios.get(`/products/${productId}/styles`)
      .then((result2) => {
        setProdStyles(result2.data.results);
      });
  }, [productId]);

  useEffect(() => {
    if (prodStyles.length > 0) {
      setCurrentStyleId(prodStyles[0].style_id);
    }
  }, [prodStyles]);

  useEffect(() => {
    prodStyles.forEach((style) => {
      if (style.style_id === currentStyleId) {
        setCurrentStyle(style);
      }
    })
  }, [currentStyleId]);

  const value = useMemo(() => ({
    prodDetails, prodStyles, currentStyleId, setCurrentStyleId, currentStyle, setCurrentStyle,
  }), [prodDetails, prodStyles, currentStyleId, setCurrentStyleId, currentStyle, setCurrentStyle]);

  return !prodDetails && !prodStyles && !currentStyleId && !currentStyle ? null : (
    <OverviewContext.Provider value={value}>
      {children}
    </OverviewContext.Provider>
  );
}

export default OverviewProvider;
