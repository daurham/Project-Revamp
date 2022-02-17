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

  // console.log('QA global productId', productId);
  function getQuestions() {
    axios.get(`/questions/${productId}`)
      .then((result) => {
        // console.log('QA GET prodId', productId, 'QA results:', result.data.results);
        setQuestions(result.data.results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    // console.log('should be populated?:', productId);
    getQuestions(productId);
  }, [productId]); // should auto update when id changes.

  const userFilteredResults = [];
  function getFilteredResults(results) {
    // console.log('inside Invoked from Search:', results);
    userFilteredResults.push(...results); // array from searchBar input field
  }
  // console.log('search bar Filt: ', userFilteredResults);
  // console.log('search bar Spec: ', userSpecifiedResults);
  // console.log(questions);

  if (questions) {
    // console.log('if truthy data: ', questions);
  }

  return !questions ? <div>Loading...</div> : (
    <div
      className={css.question_div}
    >
      <button style={{ backgroundColor: 'orange' }} type="button" onClick={updateID}> Get Another Product ID {productId} </button>
      <div><p>Questions and Answers</p></div>
      <SearchBar
        sendFilteredResults={() => { getFilteredResults(); }}
        setUserSpecifiedResults={() => { setUserSpecifiedResults(); }}
        questions={questions}
      />
      <QuestionList
        unfilteredAPIQuestions={questions}
        userFilteredSearchResults={userFilteredResults.length ? userFilteredResults : null}
      />
    </div>
  );
}

export default QuestAnswers;
