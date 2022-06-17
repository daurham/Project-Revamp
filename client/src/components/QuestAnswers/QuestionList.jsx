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
  const { productId } = useData();
  const { searchResults } = useQAData();
  const [loadLimit, updateLoadLimit] = useState(4);
  const [modal, setModal] = useState(false);
  const [attachment, setAttachment] = useState();
  const [post, setPost] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const filteredList = [];
  let input = '';
  let userName = '';
  let userEmail = '';
  let isCollapsed = true;
  let noResults = true;

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
    isCollapsed = !isCollapsed;
    setCollapsed(!collapsed);
  }

  function toggleModal() {
    setModal(!modal);
  }
  function handleInput(e) {
    input = e.target.value;
  }

  function handleUserName(e) {
    userName = e.target.value;
  }

  function handleUserEmail(e) {
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
      axios.post(`/questions/${productId}`, body);
    } else {
      alert('Please fill in the form to submit a post.');
    }
  }

  useEffect(() => {
    updateLoadLimit(4);
    isCollapsed = true;
    setCollapsed(true);
  }, [productId]);

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
              onClick={() => { toggleQuestionAccordian(); }}
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
          handleClick={() => { toggleModal(); }}
          label="Ask a Question?"
        />
        <Modal
          show={modal}
          closeCallback={toggleModal}
        >
          {!post
            ? (
              <ModalContainer>
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
                <Button
                  handleClick={() => { handleSubmit(); }}
                  type="button"
                  label="Submit"
                />
              </ModalContainer>
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

const SmButton = styled.button`
  border: 2px solid black;
  box-shadow: 2px 2px 1px 2px #8888;
  margin: 10px 0;
  background-color: white;
  height: 20px;
  ${GlobalStyle.para_sm};
  &:hover{
    cursor: pointer;
    box-shadow: 0 6px 8px 0 rgba(0,0,0,0.24), 0 10px 25px 0 rgba(0,0,0,0.19)
  }
`;
const QuestionListContainer = styled.div`
  overflow-y: scroll;
  min-height: 10vh;
  max-height: 50vh;
  max-width: 100%;
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
  width: 400px;
  height: 200px;
`;
const LModalHeader = styled.h2``;
const LModalBottomSpan = styled.span``;
const LModalBottomInput = styled.input`
  border: light-grey;
`;
const ModalContainer = styled.div``;
