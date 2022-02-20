import React, { useState } from 'react';
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
  const [voted, hasVoted] = useState(false);
  const [reported, hasReported] = useState(false);

  function reportUser() {
    alert('Thanks for keeping the community safe');
    if (!reported) {
      hasReported(true);
      axios.put(`/answers/${answer_id}/report`)
        .then(() => console.log('reported!'))
        .catch((err) => console.log(err));
    }
  }

  function upvoteUser() {
    if (!voted) {
      hasVoted(true);
      axios.put(`/answers/${answer_id}/helpful`)
        .then(() => console.log('upvoted!'))
        .catch((err) => console.log(err));
    }
  }

  console.log(currentAnswer);
  const { answerer_name } = currentAnswer;
  const { body } = currentAnswer;
  const { date } = currentAnswer;
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const newDate = `${month}/${day}/${year}`;

  const { photos } = currentAnswer;
  const { helpfulness } = currentAnswer;
  // const reply = `Answer: \n
  // ${answerer_name} - ${body}\n -
  // ${newDate}`;

  // css.border isn't picking up...? why.
  console.log(currentAnswer);
  const putStyles = { cursor: 'pointer' };
  console.log(answerer_name);
  return (
    <div className={css.border}>
      <span className={css.border}>
        <div className={appcss.para_sm}>
          A:
          {body}
          {/* <p className={}>{body}</p> */}
          {answerer_name === 'Seller' ? <b>{answerer_name}</b> : answerer_name } {newDate}
          Helpful?
          <ins style={putStyles} onClick={upvoteUser}>Yes? ({helpfulness})</ins>
          <ins style={putStyles} onClick={reportUser}>{!reported ? 'Report' : 'Reported'}</ins>
        </div>
      </span>
    </div>
  );
}

export default Answer;
