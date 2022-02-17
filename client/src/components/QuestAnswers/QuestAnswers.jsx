import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';
import { useData } from '../Context/DataProvider';
import css from './QuestAnswers.css';
import { SearchData } from './QA - Context/DataProvider';

function QuestAnswers() {
/* TEST:
  Describe: 'should be working with the current products data'
  Test: 'after rendering, my question state should be equal to a fresh get request'
*/

  const { productId } = useData();
  const { updateID } = useData();
  const [questions, setQuestions] = useState();
  const [userSpecifiedResults, setUserSpecifiedResults] = useState([]);

  function getQuestions() {
    axios.get(`/questions/${productId}`)
      .then((result) => {
        setQuestions(result.data.results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    // console.log('should be populated?:', productId);
    getQuestions(productId);
  }, [productId]); // should auto update when id changes.

  // console.log('search bar Filt: ', userFilteredResults);
  console.log('search bar Spec: ', userSpecifiedResults);
  // console.log(questions);

  if (questions) {
    // console.log('if truthy data: ', questions);
  }

  const value = useMemo(() => ({
    userSpecifiedResults, setUserSpecifiedResults,
  }), [productId]);

  return !questions ? <div>Loading...</div> : (
    <div
      className={css.question_div}
    >
      <button style={{ backgroundColor: 'orange' }} type="button" onClick={updateID}> Get Another Product ID {productId} </button>
      <div><p>Questions and Answers</p></div>
      <SearchData.Provider value={value}>
        <SearchBar
          questions={questions}
        />
        <QuestionList
          unfilteredAPIQuestions={questions}
          userFilteredSearchResults={userSpecifiedResults.length ? userSpecifiedResults : null}
        />
      </SearchData.Provider>
    </div>
  );
}

export default QuestAnswers;
