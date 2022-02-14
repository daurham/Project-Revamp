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
  const [product, setProduct] = useState(40344);
  const [questions, setQuestions] = useState(40344);
  const [answers, setAnswers] = useState(563336);

  // Network Requests
  function getProduct(productID) {
    axios.get(`/products/${productID}`)
      .then((result) => {
        console.log('product: ', result.data);
        console.log('product: ', product.id);
        setProduct(result.data);
      });
  }

  function getQuestions(productID) {
    axios.get(`/questions/${productID}`)
      .then((result) => {
        console.log('questions: ', result.data.results);
        setQuestions(result.data);
      });
  }

  function getAnswers(questionID) {
    axios.get(`/answers/${questionID}`)
      .then((result) => {
        console.log('answers: ', result.data.results);
        setAnswers(result.data);
      });
  }

  // useEffect to get single product after first render only
  useEffect(() => (
    getProduct(product)
  ), []);

  useEffect(() => {
    getQuestions(questions);
  }, []); // filling it in with questions and removing it will break.

  useEffect(() => {
    // console.log('an-quest:', questions);
    getAnswers(563336);
  }, []);
  // setting items to pass into context provider
  const value = useMemo(() => ({
    product, getProduct, questions, getQuestions, answers, getAnswers,
  }), [product, questions, answers]);

  return (
    // passing context value to all children within app.jsx
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}
// this DataProvider to be used in app.jsx
export default DataProvider;
