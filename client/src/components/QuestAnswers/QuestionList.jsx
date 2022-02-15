import React, { useState } from 'react';
import Question from './Question';
import QuestionModal from './QuestionModal';
// import styles from './QuestAnswer';

function QuestionList(questionData) {
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
  const styles = {
    border: 'solid 2px orange',
    width: '50%',
  };
  return (
    <div>
      {filteredList.map((question) => (
        <div
          className="question-div"
          style={styles}
          key={question.question_id}
        >
          {question.question_body}
          <Question
            data={question.question_body}
          />
        </div>
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
