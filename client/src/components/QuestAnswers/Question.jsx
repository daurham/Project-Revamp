import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer';
import { useData } from '../DataProvider';

function Question({ currentQuestion }) {
  /* TEST:
    Describe: 'My Question component renders all the question data'
    Test: 'CurrentQuestion prop length should match a get request of the question'
  */

  const { question_id } = currentQuestion;
  const [questionId, setQuestionId] = useState(question_id);
  const [answers, setAnswers] = useState();
  const [loadLimit, updateLoadLimit] = useState(2);
  const filteredList = [];
  const { question_body } = currentQuestion;
  const { questionBody } = currentQuestion;

  // console.log(questionBody);

  function getAnswers(id) {
    axios.get(`/answers/${id}`)
      .then((result) => {
        setAnswers(result.data.results);
      });
  }

  if (!answers) {
    getAnswers(questionId);
  }

  if (answers) {
    for (let i = 0; i < loadLimit; i += 1) {
      if (answers[i]) {
        filteredList.push(answers[i]);
      }
    }
  }
  // useEffect(() => {
  //   setQuestionId();
  // }, [questionId]);

  // function filterAnswers(data, filter = null) {
  //   if (filter === 'helpful') {
  //     arrayOfAnswers.push(...getHelpfulAnswers(data)); // create the fn
  //   } else {
  //     // if the filter isnt truthy,
  //     arrayOfAnswers.push(...Object.keys(data));
  //   }
  // }

  function loadMoreAnswers() {
    // e.preventDefault();
    updateLoadLimit(() => loadLimit + 2);
  }
  function launchModal() {
    console.log('launched modal');
  }

  console.log('Q - Current LoadLimit: ', loadLimit);
  return !answers ? null : (
    <div>
      <span>
        Question-
        {question_body}
        {filteredList.map((currAnswer) => (
          <Answer
            currentAnswer={currAnswer}
            key={currAnswer.answer_id}
          />
        ))}
      </span>
      <br />
      <span>
        <button
          type="button"
          onClick={() => { loadMoreAnswers(); }}
        >
          Load More Answers
        </button>
        <button
          type="button"
          onClick={() => { launchModal(); }}
        >
          Answer this Question
        </button>
      </span>
    </div>
  );
}

export default Question;
