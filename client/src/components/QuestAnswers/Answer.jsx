import React from 'react';
import axios from 'axios';
import appcss from '../App.css';
import css from './QuestAnswers.css';
// import { useData } from '../DataProvider';

function Answer({ currentAnswer }) {
  /* TEST:
    Describe: 'My Answer component renders all the answer data'
    Test: 'CurrentAnswer prop length should match a get request of the answer'
  */
  const { answer_id } = currentAnswer;

  function reportUser() {
    axios.put(`/answers/${answer_id}/report`)
      .then(() => console.log('reported!'))
      .catch((err) => console.log(err));
  }

  function upvoteUser() {
    axios.put(`/answers/${answer_id}/helpful`)
      .then(() => console.log('upvoted!'))
      .catch((err) => console.log(err));
  }

  // console.log(currentAnswer);
  const { answerer_name } = currentAnswer;
  const { body } = currentAnswer;
  const { date } = currentAnswer;
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const newDate = `${month}/${day}/${year}`;
  // const reply = `Answer: \n
  // ${answerer_name} - ${body}\n -
  // ${newDate}`;

  // css.border isn't picking up...? why.
  return (
    <div className={css.border}>
      <span className={css.border}>
        <p className={appcss.para_sub_title}>Answer</p>
        <p className={appcss.para_sm}>
          Responders Name-
          {answerer_name}
        </p>
        <p className={appcss.para_md}>
          Body-
          {body}
        </p>
        <p className={appcss.para_sm}>
          Date-
          {newDate}
        </p>
      </span>
      <span className={css.border}>
        <div className={appcss.para_sm}>
          <p
            style={{cursor: 'pointer'}}
            onClick={upvoteUser}
            >
            Helpful
          </p>
          <p
            style={{cursor: 'pointer'}}
            onClick={reportUser}
          >
            Report
          </p>
        </div>
      </span>
    </div>
  );
}

export default Answer;
