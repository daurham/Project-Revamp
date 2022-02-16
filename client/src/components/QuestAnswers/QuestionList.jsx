import React, { useState, useEffect } from 'react';
import Question from './Question';
import QuestionModal from './QuestionModal';
import { useData } from '../DataProvider';
import css from './QuestAnswers.css';
// import styles from './QuestAnswer';

function QuestionList(questionData) {
  /* TEST:
    Describe: 'My Question component dynamically renders the filtered question data in bursts of 2'
    Test: 'after "load more" button is clicked, expect the children of the list to increment by 2'
  */

  const { productId } = useData();
  const [loadLimit, updateLoadLimit] = useState(2);
  const { unfilteredQuestions } = questionData;
  const { userFilteredResults } = questionData;
  const questions = [];

  if (userFilteredResults) {
    questions.push(...userFilteredResults);
  } else {
    questions.push(...unfilteredQuestions);
  }

  // only allow 2 elements at a time.
  const filteredList = [];
  for (let i = 0; i < loadLimit; i += 1) {
    if (questions[i]) {
      filteredList.push(questions[i]);
    }
  }

  // load more Questions if the btn is clicked and invoking this fn.
  function loadMoreQuestions(e) {
    e.preventDefault();
    updateLoadLimit(() => loadLimit + 2);
  }
  // console.log(productId);
  // if (productId) {
  useEffect(() => {
    console.log(productId);
    updateLoadLimit(loadLimit); // restores the limit after each item selected
  }, [productId]);
  // }

  console.log('QL - Current LoadLimit: ', loadLimit);
  return (
    <div>
      {filteredList.map((question) => (
        <div
          // className={css.q_list_div}
          key={question.question_id}
        >
          <Question
            currentQuestion={question}
          />
        </div>
      ))}
      <br />
      <span>
        <div className="question-list-btm-btn">
          <button
            type="button"
            onClick={loadMoreQuestions}
          >
            Load More Questions
          </button>
          <QuestionModal />
        </div>
      </span>
    </div>
  );
}

export default QuestionList;
