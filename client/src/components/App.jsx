import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Overview from './Overview/Overview';
import RelatedItems from './RelatedItems/RelatedItems';
import QuestAnswers from './QuestAnswers/QuestAnswers';
import RatingsReviews from './RatingsReviews/RatingsReviews';
// import styles from './App.css';

export const DataContext = React.createContext();

function App() {
  const [products, setProducts] = useState();
  const [reviews, setReviews] = useState();
  const [questions, setQuestions] = useState();
  const [cart, setCart] = useState();

  let params;

  function getProducts() {
    axios.get('/products', params)
      .then((result) => setProducts(result.data));
  }

  function getReviews() {
    axios.get('/reviews', params)
      .then((result) => setReviews(result.data));
  }

  function getQuestions() {
    axios.get('/questions', params)
      .then((result) => setQuestions(result.data));
  }

  function getCart() {
    axios.get('/user-cart', params)
      .then((result) => setCart(result.data));
  }

  useEffect(() => {
    getProducts();
    getReviews();
    getQuestions();
    getCart();
  }, []);

  const value = useMemo(() => ({
    products, setProducts, reviews, setReviews, questions, setQuestions, cart, setCart,
  }), [products, reviews, questions, cart]);

  console.log(products);

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
