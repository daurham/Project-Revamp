import React, {
  useState, useMemo, useContext, useEffect,
} from 'react';
import axios from 'axios';
import { useData } from '../SharedContexts/DataProvider';

const RelatedContext = React.createContext();

export function useRelated() {
  return useContext(RelatedContext);
}

function RelatedProvider({ children }) {
  const { productId } = useData();
  const [relatedItemsInfo, setRelatedItemsInfo] = useState([]);
  const [localData, setLocalData] = useState(
    localStorage.items ? JSON.parse(localStorage.items) : {},
  );

  useEffect(() => {
    axios.get(`/products/${productId}/related`)
      .then((result1) => {
        result1.data.forEach((item) => {
          axios.get(`/products/${item}/relatedinfo`)
          // .then((result2) => setRelatedItemsInfo((prevItems) => prevItems.concat(result2.data)));
            .then((result2) => setRelatedItemsInfo((prevItems) => [...prevItems, ...result2.data]));
        });
      });
    // return () => (setRelatedItemsInfo([]));
    return setRelatedItemsInfo([]);
  }, [productId]);

  const value = useMemo(() => ({
    relatedItemsInfo, localData, setLocalData,
  }), [relatedItemsInfo, localData]);

  return (
    <RelatedContext.Provider value={value}>
      {children}
    </RelatedContext.Provider>
  );
}

export default RelatedProvider;
