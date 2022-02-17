import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';
import Modal from '../SharedComponents/Modal';

import { useData } from '../Context/DataProvider';
import qacss from './QuestAnswers.css';
import modalcss from '../SharedComponents/Modal.css';
// import styles from './QuestAnswer';

function QuestionList(questionData) {
  /* TEST:
    Describe: 'My Question component dynamically renders the filtered question data in bursts of 2'
    Test: 'after "load more" button is clicked, expect the children of the list to increment by 2'
  */

  const questions = [];
  const { productId } = useData();
  const { unfilteredQuestions } = questionData;
  const { userFilteredResults } = questionData;
  const [loadLimit, updateLoadLimit] = useState(2);
  const [post, postMade] = useState(false);
  const [modal, setModal] = useState(false);
  // modal input:
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [attachment, setAttachment] = useState();

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
      postMade(true);
      axios.post(`/questions/${productId}`, body)
        .then(() => console.log('posted!'))
        .catch((err) => console.log(err));
    } else {
      alert('Please fill in the form to submit a post.');
    }
  }


  useEffect(() => {
    updateLoadLimit(2); // restores the limit after each item selected
  }, [productId]);

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
