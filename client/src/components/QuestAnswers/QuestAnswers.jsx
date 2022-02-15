import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';
import { useData } from '../DataProvider';

function QuestAnswers() {
  const { product } = useData();
  const { getProduct } = useData();
  const [questions, setQuestions] = useState();
  const [rendered, setRendered] = useState(false);

  // console.log(product);
  // getProduct(40344);
  // console.log('getP fn:', getProduct);
  // console.log('prod:', product);

  function getQuestions(productID) {
    axios.get(`/questions/${productID.id}`)
      .then((result) => {
        console.log('questions: ', result.data);
        setQuestions(result.data.results);
      })
      .catch((err) => console.log(err));
  }

  if (questions) {
    console.log(questions);
  }
  if (!rendered) {
    if (typeof product === 'object') {
    // if (typeof product === 'number') {
      console.log(product);
      getQuestions(product);
      setRendered(true);
    }
  }

  // useEffect(() => {
  //   // getQuestions(questions);
  // }, []); // filling it in with questions and removing it will break.

  // const [userSpecifiedResults, setUserSpecifiedResults] = useState([]);

  // useEffect(() => {
  // }, [questions]);
  const userFilteredResults = [];
  function getFilteredResults(results) {
    console.log('inside Invoked from Search:', results);
    userFilteredResults.push(...results); // array from searchBar input field
  }
  console.log('search bar: ', userFilteredResults);

  const styles = {
    border: 'solid 2px orange',
    width: '50%',
  };

  return !questions ? null : (
    <div
      className="QuestAnswer-Component"
      style={styles}
    >
      <div><p>Questions and Answers</p></div>
      <SearchBar
        sendFilteredResults={() => { getFilteredResults(); }}
        questions={questions}
      />
      <QuestionList
        unfilteredQuestions={questions}
        userFilteredResults={userFilteredResults.length ? userFilteredResults : null}
      />
    </div>
  );
}

export default QuestAnswers;
