import React, {
  useContext, useEffect, useState, useMemo,
} from 'react';
import axios from 'axios';
import { useData } from '../../SharedContexts/DataProvider';

const SearchData = React.createContext();

export function useQAData() {
  return useContext(SearchData);
}

function QuestionProvider({ children }) {
  const { productId } = useData();
  const [questions, setQuestions] = useState();
  const [searchResults, setSearchResults] = useState([]);

  function getQuestions() {
    axios.get(`/questions/${productId}`)
      .then((result) => {
        setQuestions(result.data.results);
        setSearchResults(result.data.results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getQuestions();
  }, [productId]); // should auto update when id changes.
  // console.log('am i rerendering from DataProvider?');
  const value = useMemo(() => ({
    questions, searchResults, setSearchResults, setQuestions, getQuestions,
  }), [questions, searchResults]);

  return (
    <SearchData.Provider value={value}>
      {children}
    </SearchData.Provider>
  );
}

export default QuestionProvider;
