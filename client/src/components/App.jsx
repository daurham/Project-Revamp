import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
// import styles from './App.css';
import { Authorization } from '../../../apikey';
import Overview from './Overview/Overview';
import RelatedItems from './RelatedItems/RelatedItems';
import QuestAnswers from './QuestAnswers/QuestAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';

export const DataContext = React.createContext();

function App() {
  const [products, setProducts] = useState();
  const [reviews, setReviews] = useState();
  const [questions, setQuestions] = useState();
  const [cart, setCart] = useState();

  const headers = { Authorization };
  const config = { headers };

  function getProducts() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', config)
      .then((result) => setProducts(result.data));
  }

  function getReviews() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', config)
      .then((result) => setReviews(result.data));
  }

  function getQuestion() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', config)
      .then((result) => setQuestions(result.data));
  }

  function getCart() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', config)
      .then((result) => setCart(result.data));
  }

  useEffect(() => {
    getProducts();
    getReviews();
    getQuestion();
    getCart();
  }, []);

  const value = useMemo(() => ({
    products, setProducts, reviews, setReviews, questions, setQuestions, cart, setCart,
  }), [products, reviews, questions, cart]);

  return (
    <DataContext.Provider value={value}>
      <Overview />
      <RelatedItems />
      <QuestAnswers />
      <RatingsReviews />
    </DataContext.Provider>
  );
}

export default App;
