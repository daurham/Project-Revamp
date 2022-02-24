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
  // let loadLimit = 4;
  const [loadLimit, updateLoadLimit] = useState(4);

  // modal input:
  const [modal, setModal] = useState(false);
  // let modal = false;
  // const [input, setInput] = useState('');
  let input = '';
  // const [userName, setUserName] = useState('');
  let userName = '';
  // const [userEmail, setUserEmail] = useState('');
  let userEmail = '';
  const [attachment, setAttachment] = useState();
  const [post, setPost] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  let isCollapsed = true;
  let noResults = true;
  // let test = true;

  function renderList() {
    searchResults.sort((a, b) => (a.question_helpfulness < b.question_helpfulness
      ? 1 : -1));
    if (searchResults && searchResults.length > 0) {
      noResults = false;
      for (let i = 0; i < loadLimit; i += 1) {
        if (searchResults[i]) {
          filteredList.push(searchResults[i]);
        }
      }
    }
  }

  if (searchResults) {
    renderList();
  }

  function toggleQuestionAccordian() {
    updateLoadLimit(loadLimit === 4 ? searchResults.length - 1 : 4);
    // loadLimit = loadLimit === 4 ? searchResults.length - 1 : 4;
    isCollapsed = !isCollapsed;
    setCollapsed(!collapsed);
  }

  function toggleModal() {
    setModal(!modal);
    // modal = !modal;
    console.log('attempt modal');
  }
  function handleInput(e) {
    e.preventDefault();
    console.log('typing on modal body');
    // setInput(e.target.value);
    input = e.target.value;
  }

  function handleUserName(e) {
    // setUserName(e.target.value);
    userName = e.target.value;
  }

  function handleUserEmail(e) {
    // setUserEmail(e.target.value);
    userEmail = e.target.value;
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
    // console.log('am i rerendering from prodId?');
    // renderList();
    updateLoadLimit(4); // restores the limit after each item selected
    // loadLimit = 4;
    isCollapsed = true;
    setCollapsed(true);
  }, [productId]);

  return (
    <div className="testname">
      {/* <p className="ptest">test</p> */}
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
                <LModalHeader>Ask A Question</LModalHeader>

                <form>
                  <ModalTextarea
                    placeholder="What do you want to ask other buyers?"
                    onChange={handleInput}
                  />
                  <LModalBottomSpan>
                    <LModalBottomInput
                      type="text"
                      onChange={handleUserName}
                      placeholder="Name"
                    />
                    <LModalBottomInput
                      type="text"
                      onChange={handleUserEmail}
                      placeholder="Email"
                    />
                  </LModalBottomSpan>
                </form>
                <SmButton
                  onClick={handleSubmit}
                  type="button"
                >
                  Submit
                </SmButton>
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
  min-height: 75px
`;

const LModalHeader = styled.h2`
  margin: 0px;
`;

const LModalBottomSpan = styled.span`
  display: flex;
  justify-content: space-evenly;
  margin: 0px;
`;

const LModalBottomInput = styled.input`
  border: light-grey;
`;
