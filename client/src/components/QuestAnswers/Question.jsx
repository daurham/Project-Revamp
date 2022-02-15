import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer';
import { useData } from '../DataProvider';

// if allowed, pass the current Quesstion data in and use
function Question({ currentQuestion }) {
  // map over the availible answers and only post 2.

  // look into how this fn works and what properties I can use to extract the
  // current products, current Questions Answers.

  // const [answers, setAnswers] = useState();

  // function getAnswers(currentQuestion.id) {
  //   axios.get(`/answers/${currentQuestion.id}`)
  //     .then((result) => {
  //       console.log('answers: ', result.data);
  //       setAnswers(result.data);
  //     });
  // }

  // create a function tied to a button, that when invoked, maps over-
  // another two answers for this question.

  function loadMoreAnswers(e) {
    e.preventDefault();
    // input logic
  }

  // only load 2.
  // let id = 0; // cant increment in airbnb. fix me later.
  return (
    <div>
      {/* {answers.map((currAnswer) => ( */}
      {/* <Answer currentAnswer={currAnswer} /> */}
      {/* ))} */}
      <span>
        <button
          type="button"
          onClick={() => { loadMoreAnswers(); }}
        >
          Load More Answers
        </button>
      </span>
    </div>
  );
}

export default Question;
