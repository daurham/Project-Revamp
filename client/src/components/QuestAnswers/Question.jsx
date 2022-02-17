import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer';
import Modal from '../SharedComponents/Modal';
import { useData } from '../Context/DataProvider';
import qacss from './QuestAnswers.css';
import appcss from '../App.css';
import modalcss from '../SharedComponents/Modal.css';

function Question({ currentQuestion }) {
  /* TEST:
    Describe: 'My Question component renders all the question data'
    Test: 'CurrentQuestion prop length should match a get request of the question'
  */

  const filteredList = [];
  const { question_id } = currentQuestion;
  const { question_body } = currentQuestion;
  const { questionBody } = currentQuestion;
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
        .then(() => console.log('posted!'))
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
    axios.put(`/questions/${questionId}/report`)
      .then(() => console.log('reported!'))
      .catch((err) => console.log(err));
  }

  function upvoteUser() {
    axios.put(`/questions/${questionId}/helpful`)
      .then(() => console.log('upvoted!'))
      .catch((err) => console.log(err));
  }

  const noAnswers = 'No ones answered yet...';

  return !answers ? <div>Loading...</div> : (
    <div>
      <span>
        Question-
        {question_body}
        <div className={appcss.para_sm}>
          <p
            style={{ cursor: 'pointer' }}
            onClick={upvoteUser}
          >
            Helpful
          </p>
          <p
            style={{ cursor: 'pointer' }}
            onClick={reportUser}
          >
            Report
          </p>
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
