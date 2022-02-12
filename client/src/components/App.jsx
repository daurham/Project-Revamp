import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
// import styles from './App.css';

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

  return (
    <div>Hello</div>
  );
}

export default App;
