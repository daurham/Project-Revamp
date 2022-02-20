import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer';
import Modal from '../SharedComponents/Modal';
import { useData } from '../SharedContexts/DataProvider';
import qacss from './QuestAnswers.css';
import appcss from '../App.css';
import modalcss from '../SharedComponents/Modal.css';

function Question({ currentQuestion }) {
  /* TEST:
    Describe: 'My Question component renders all the question data'
    Test: 'CurrentQuestion prop length should match a get request of the question'
  */

  /*
  asker_name: "Joe"
  question_body: "hgf"
  question_date: "2022-02-17T00:00:00.000Z"
  question_helpfulness: 7
  question_id: 573381
  reported: false
  */

  const filteredList = [];
  const { question_id } = currentQuestion;
  const { question_body } = currentQuestion;
  const { question_date } = currentQuestion;
  const { question_helpfulness } = currentQuestion;
  const { asker_name } = currentQuestion;
  const [questionId, setQuestionId] = useState(question_id);
  const [answers, setAnswers] = useState();
  const [loadLimit, updateLoadLimit] = useState(2);
  const [post, postMade] = useState(false);
  const [modal, setModal] = useState(false);
  // modal input:
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [attachment, setAttachment] = useState();
  const [voted, hasVoted] = useState(false);
  const [reported, hasReported] = useState(false);

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
    answers.sort((a, b) => { a.helpfulness > b.helpfulness ? 1 : -1 });
    answers.sort((a, b) => { a.answerer_name.toLowerCase() === 'seller' && b.answerer_name.toLowerCase() !== 'seller' ? 1 : -1 });
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
    updateLoadLimit(() => loadLimit + 2);
  }

  function toggleModal() {
    setModal(!modal);
  }

  function handleSubmit() {
    if ((userName && userEmail) && input) {
      const body = {
        body: input,
        name: userName,
        email: userEmail,
      };
      if (attachment) {
        body.photos = [attachment]; // its an array
      }
      postMade(true); // may not need
      console.log(body);
      axios.post(`/answers/${question_id}`, body)
        .then(() => console.log('Answer posted!'))
        .catch((err) => console.log(err));
    } else {
      alert('Please fill in the form to submit a post.');
    }
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handleUserEmail(e) {
    setUserEmail(e.target.value);
  }

  function uploadAttachment() {
    // setAttachment(e.file?);
    console.log('upload a pic');
    // logic
  }

  function reportUser() {
    console.log(currentQuestion);
    axios.put(`/questions/${questionId}/report`)
      .then(() => console.log('reported!'))
      .catch((err) => console.log(err));
  }

  function upvoteUser() {
    console.log(currentQuestion.question_helpfulness);
    axios.put(`/questions/${questionId}/helpful`)
      .then(() => console.log('upvoted!'))
      .catch((err) => console.log(err));
  }

  const noAnswers = 'No ones answered yet...';

  const putStyles = { cursor: 'pointer' };

  return !answers ? <div>Loading...</div> : (
    <div>
      <span>
        Q: {question_id}
        {question_body}
        {question_helpfulness}
        {question_date}
        {asker_name}
        <div className={appcss.para_sm}>
          <span>
            Helpful?
            {' '}
            <ins style={putStyles} onClick={upvoteUser}>Yes ({question_helpfulness})</ins>
            {' | '}
            <ins style={putStyles} onClick={reportUser}>{!reported ? 'Report' : 'Reported'}</ins>
          </span>
        </div>
      </span>
      {filteredList.length > 0 ? (filteredList.map((currAnswer) => (
        <Answer
          currentAnswer={currAnswer}
          key={currAnswer.answer_id}
        />
      )))
        : <div className={appcss.para_sm}>{noAnswers}</div>}
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
          onClick={() => { toggleModal(); }}
        >
          Answer this Question?
        </button>
        <Modal
          show={modal}
          closeCallback={toggleModal}
        >
          {!post
            ? (
              <div>
                <h2>Answer A Question</h2>

                <form>
                  <textarea
                    className={modalcss.qa_textarea}
                    placeholder="What do you want to say?"
                    onChange={handleInput}
                  />
                  <span>
                    <input
                      type="text"
                      onChange={handleUserName}
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      onChange={handleUserEmail}
                      placeholder="Email"
                    />
                  </span>
                </form>
                <span>
                  <button
                    onClick={handleSubmit}
                    type="button"
                  >
                    Submit
                  </button>
                  <button
                    onClick={uploadAttachment}
                    type="button"
                  >
                    Upload an Image
                  </button>
                </span>
              </div>
            )
            : (
              <div>
                <h2>Thanks!</h2>
              </div>
            )}
        </Modal>
      </span>
    </div>
  );
}

export default Question;
