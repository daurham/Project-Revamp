import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Question from './Question';
import Modal from '../SharedComponents/Modal';
import GlobalStyle from '../GlobalStyle';
import { useData } from '../SharedContexts/DataProvider';
import { useQAData } from './QAContext/DataProvider';
import Button from '../SharedComponents/Button';

function QuestionList() {
  /* TEST:
    Describe: 'My Question component dynamically renders the filtered question data in bursts of 2'
    Test: 'after "load more" button is clicked, expect the children of the list to increment by 2'
  */

  const filteredList = [];
  const { productId } = useData();
  const { questions, setQuestions, searchResults } = useQAData();
  const [loadLimit, updateLoadLimit] = useState(2);

  // modal input:
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [attachment, setAttachment] = useState();
  const [post, setPost] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  let noResults = true;

  // only allow 4 questions at a time.
  function renderList() {
    searchResults.sort((a, b) => (a.question_helpfulness < b.question_helpfulness
      ? 1 : -1)); // sort by helpfulness
    if (searchResults && searchResults.length > 0) {
      noResults = false;
      for (let i = 0; i < loadLimit; i += 1) {
        if (searchResults[i]) { // if truthy
          filteredList.push(searchResults[i]);
        }
      }
    }
  }

  if (searchResults) {
    renderList();
  }

  function toggleQuestionAccordian() {
    updateLoadLimit(loadLimit === 4 ? searchResults.length : 4);
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
    renderList();
    updateLoadLimit(4); // restores the limit after each item selected
    setCollapsed(true);
  }, [productId]);

  useEffect(() => {
    renderList();
  }, [searchResults]);

  return (
    <div>
      <QuestionListContainer>
        {noResults ? (<NoQuestions>No Questions</NoQuestions>) : filteredList.map((question) => (
          <div
            key={question.question_id}
          >
            <Question
              currentQuestion={question}
            />

          </div>
        ))}
        {(!noResults && searchResults.length > 4)
          ? (
            <SmButton
              type="button"
              onClick={toggleQuestionAccordian}
            >
              {
                collapsed ? 'See more questions' : 'Collapse'
              }
            </SmButton>
          ) : null}
        <br />
      </QuestionListContainer>
      <ButtonContainer>
        <Button
          type="button"
          handleClick={toggleModal}
          label="Ask a Question?"
        />

        <Modal
          show={modal}
          closeCallback={toggleModal}
        >
          {!post
            ? (
              <div>
                <h2>Ask A Question</h2>

                <form>
                  <ModalTextarea
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
      </ButtonContainer>
    </div>
  );
}

export default QuestionList;

// Styles:

const SmButton = styled.button`
  box-shadow: 2px 0px 1px 0px #8888;
  margin-left: 10px;
  background-color: white;
  height: 20px;
  cursor: pointer;
  ${GlobalStyle.para_md};
  `;

const QuestionListContainer = styled.div`
  overflow-y: scroll;
  min-height: 10vh;
  max-height: 50vh;
  `;

const ButtonContainer = styled.div`
  margin-bottom: 2%;
  margin-left: 2%;
`;

const NoQuestions = styled.h1`
  ${GlobalStyle.sub_title};
  margin-left: 5%;
`;

const ModalTextarea = styled.textarea`
  resize: none;
  width: 90%;
  height: 90%;
`;
