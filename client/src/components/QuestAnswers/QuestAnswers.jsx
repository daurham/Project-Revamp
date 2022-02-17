import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';
import { useData } from '../Context/DataProvider';
import css from './QuestAnswers.css';

function QuestAnswers() {
  /* TEST:
  Describe: 'should be working with the current products data'
  Test: 'after rendering, my question state should be equal to a fresh get request'
*/

  const { productId } = useData();
  const { updateID } = useData();
  const [questions, setQuestions] = useState();
  const [userSpecifiedResults, setUserSpecifiedResults] = useState([]);

  function getQuestions(productID) {
    axios.get(`/questions/${productID}`)
      .then((result) => {
        setQuestions(result.data.results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getQuestions(productId);
  }, [productId, userSpecifiedResults]); // should auto update when id changes.

  const userFilteredResults = [];
  function getFilteredResults(results) {
    // console.log('inside Invoked from Search:', results);
    userFilteredResults.push(...results); // array from searchBar input field
  }
  // console.log('search bar Filt: ', userFilteredResults);
  // console.log('search bar Spec: ', userSpecifiedResults);

  return !questions ? <div>Loading...</div> : (
    <div
      className={css.question_div}
    >
      <button style={{ backgroundColor: 'orange' }} type="button" onClick={() => updateID()}> Get Another Product ID {productId} </button>
      <div><p>Questions and Answers</p></div>
      <SearchBar
        sendFilteredResults={() => { getFilteredResults(); }}
        setUserSpecifiedResults={() => { setUserSpecifiedResults(); }}
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
