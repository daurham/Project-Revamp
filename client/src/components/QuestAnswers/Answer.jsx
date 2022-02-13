import React from 'react';
// import { useData } from '../DataProvider';

function Answer({ currentAnswer }) {
  // look into the currentAnswer object I'll be passing in and use the data-
  // to create the current answers.
  // Later, I can include the extra features here listed in Trello / project booklet.
  return (
    <div>
      <span>
        <p>
          {currentAnswer.user}
          {currentAnswer.answer}
          {currentAnswer.data}
        </p>
      </span>
      <p>Helpful</p>
      <p>Report</p>
    </div>
  );
}

export default Answer;
