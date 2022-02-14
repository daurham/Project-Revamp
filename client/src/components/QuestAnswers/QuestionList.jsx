import React from 'react';
import Question from './Question';
import QuestionModal from './QuestionModal';
import { useData } from '../DataProvider';

function QuestionList({ filteredList }) {
  const { product } = useData();
  const { getQuestions } = useData();

  // look into how this function works / what info is on the product properties.
  const questions = getQuestions(product);

  // load more Questions if the btn is clicked and invoking this fn.
  function loadMoreQuestions(e) {
    e.preventDefault();
    // maybe over iter and pass 2 at a time per click.
    [...filteredList].map((Q) => (
      <div>{Q}</div>
    ));
    // logic
  }

  return (
    <div>
      {questions.map((currQuestion) => (
        // only load 2. May need to use a function instead due to linter...
        // look into finding an id since I cant increment an arbitrary number.
        // Assuming the array I create on line 11 gives me an array of Q objects.
        <Question question={currQuestion.question} key={currQuestion.id} />
      ))}

      <span>

        <div className="question-list-btm-btn">
          <button
            type="button"
            onClick={loadMoreQuestions}
          >
            Load More Questions
          </button>
        </div>

        <QuestionModal />

      </span>
    </div>
  );
}

export default QuestionList;
