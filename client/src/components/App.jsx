import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import styles from './App.css';
import { Authorization } from '../../../apikey';

function App() {
  const [products, setProducts] = useState();
  const [reviews, setReviews] = useState();
  const [questions, setQuestions] = useState();
  const [cart, setCart] = useState();

  const headers = { Authorization };
  const params = { headers };

  function getProducts() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', params)
      .then((result) => setProducts(result.data));
  }

  function getReviews() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews', params)
      .then((result) => setReviews(result.data));
  }

  function getQuestion() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', params)
      .then((result) => setQuestions(result.data));
  }

  function getCart() {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart', params)
      .then((result) => setCart(result.data));
  }

  useEffect(() => {
    getProducts();
    getReviews();
    getQuestion();
    getCart();
  });

  return (
    <>
    </>
  );
}

export default App;
