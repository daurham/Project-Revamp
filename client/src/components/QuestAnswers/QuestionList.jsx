import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import Modal from '../SharedComponents/Modal';

import { useData } from '../SharedContexts/DataProvider';
import { useQAData } from './QA - Context/DataProvider';
import qacss from './QuestAnswers.css';
import modalcss from '../SharedComponents/Modal.css';
// spinner: <i class="fa-solid fa-spinner"></i>
// spinner: ~

function QuestionList() {
  /* TEST:
    Describe: 'My Question component dynamically renders the filtered question data in bursts of 2'
    Test: 'after "load more" button is clicked, expect the children of the list to increment by 2'
  */

  const { productId } = useData();
  const { questions } = useQAData();
  const [loadLimit, updateLoadLimit] = useState(2);
  // modal input:
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [attachment, setAttachment] = useState();
  const [post, setPost] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  let noResults = false;

  questions.sort((a, b) => {a.helpfulness > b.helpfulness ? 1 : -1}); // sort by helpfulness

  // only allow 4 questions at a time.
  const filteredList = [];
  if (questions && questions.length > 0) {
    noResults = true;
    for (let i = 0; i < loadLimit; i += 1) {
      if (questions[i]) { // if truthy
        filteredList.push(questions[i]);
      }
    }
  }

  // load more Questions if the btn is clicked and invoking this fn.
  function toggleQuestionAccordian(e) {
    e.preventDefault();
    updateLoadLimit(loadLimit === 4 ? questions.length : 4);
    setCollapsed(!collapsed);
  }

  function toggleModal() {
    setModal(!modal);
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

  function handleSubmit() {
    if ((userName && userEmail) && input) {
      const body = {
        body: input,
        name: userName,
        email: userEmail,
        product_id: productId,
      };
      setPost(true);
      console.log(body);
      axios.post(`/questions/${productId}`, body)
        .then(() => console.log('Question posted!'))
        .catch((err) => console.log(err));
    } else {
      alert('Please fill in the form to submit a post.');
    }
  }

  useEffect(() => {
    updateLoadLimit(4); // restores the limit after each item selected
    setCollapsed(true);
  }, [productId]);

  useEffect(() => {
  }, [questions, collapsed]);
  console.log(noResults);

  return (
    <div>
      {!noResults ? (<div>No Questions!</div>) : filteredList.map((question) => (
        <div
          key={question.question_id}
        >
          <Question
            currentQuestion={question}
          />

        </div>
      ))}
      {noResults
        ? (
          <button
            type="button"
            onClick={toggleQuestionAccordian}
          >
            {
              collapsed ? 'open' : 'close'
            }
          </button>
        ) : null}
      <br />
      <span>
        <div className="question-list-btm-btn">

          {/* seperation */}
          <button
            type="button"
            className="modal_opener"
            onClick={toggleModal}
          >
            Ask a Question?
          </button>

          <Modal
            show={modal}
            closeCallback={toggleModal}
          >
            {!post
              ? (
                <div>
                  <h2>Ask A Question</h2>

                  <form>
                    <textarea
                      className={modalcss.qa_textarea}
                      placeholder="What do you want to ask other buyers?"
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
                  <button
                    onClick={handleSubmit}
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              )
              : (
                <div>
                  <h2>Thanks!</h2>
                </div>
              )}
          </Modal>
        </div>
      </span>
    </div>
  );
}

export default QuestionList;
