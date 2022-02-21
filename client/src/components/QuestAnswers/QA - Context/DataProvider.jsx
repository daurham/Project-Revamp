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
  const [qS, getQuestions] = useState(0);
  // const [currentQuestion, setCurrentQuestion] = useState();
  // const [currentAnswer, setCurrentAnswer] = useState();
  // const [input, setInput] = useState('');

  useEffect(() => {
    axios.get(`/questions/${productId}`)
      .then((result) => {
        setQuestions(result.data.results);
      })
      .catch((err) => console.log(err));
  }, [productId, qS]); // should auto update when id changes.

  const value = useMemo(() => ({
    questions, searchResults, setSearchResults, getQuestions, qS,
  }), [questions, searchResults]);

  return (
    <SearchData.Provider value={value}>
      {children}
    </SearchData.Provider>
  );
}

export default QuestionProvider;
