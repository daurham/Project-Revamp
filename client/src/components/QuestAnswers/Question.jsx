import React from 'react';
import Answer from './Answer';
import { useData } from '../DataProvider';

// if allowed, pass the current Quesstion data in and use
function Question({ currentQuestion }) {
  // map over the availible answers and only post 2.

  // look into how this fn works and what properties I can use to extract the
  // current products, current Questions Answers.
  const { getAnswers } = useData();

  // answers array, look into the currentQuestion object logic and how I'll render this.
  const answers = getAnswers(currentQuestion.id);

  // create a function tied to a button, that when invoked, maps over-
  // another two answers for this question.

  function loadMoreAnswers(e) {
    e.preventDefault();
    // input logic
  }

  // let id = 0; // cant increment in airbnb. fix me later.
  return (
    <div>
      {answers.map((currAnswer) => (
        // only load 2. May need to use a function instead of map due to linter...
        <Answer currentAnswer={currAnswer} />
      ))}
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
