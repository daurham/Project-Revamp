import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import Answer from './Answer';
import Modal from '../SharedComponents/Modal';
import Button from '../SharedComponents/Button';
import Spinner from '../SharedComponents/Spinner';
import { useData } from '../SharedContexts/DataProvider';
import { useQAData } from './QAContext/DataProvider';

function Question({ currentQuestion }) {
  const filteredList = [];
  const { getQuestions } = useQAData();
  const { question_id } = currentQuestion;
  const { question_body } = currentQuestion;
  const { question_helpfulness } = currentQuestion;
  const { productId } = useData();
  const [questionId, setQuestionId] = useState(question_id);
  const [answers, setAnswers] = useState();
  const [loadLimit, updateLoadLimit] = useState(2);
  const [post, postMade] = useState(false);
  const [modal, setModal] = useState(false);
  const [voted, hasVoted] = useState(false);
  const [reported, hasReported] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const answerListLabel = (collapsed ? 'See more answers' : 'Collapse answers');
  const noAnswers = 'No ones answered yet...';
  let body;
  let name;
  let email;

  function getAnswers(id) {
    axios.get(`/answers/${id}`)
      .then((result) => {
        setAnswers(result.data.results);
      });
  }

  if (!answers) {
    getAnswers(questionId);
  }

  function renderList() {
    if (answers) {
      answers.sort((a, b) => (a.helpfulness > b.helpfulness ? 1 : -1));
      answers.sort((a, b) => ((a.answerer_name.toLowerCase() === 'seller' && b.answerer_name.toLowerCase() !== 'seller') ? 1 : -1));
      for (let i = 0; i < loadLimit; i += 1) {
        if (answers[i]) {
          filteredList.push(answers[i]);
        }
      }
    }
  }

  if (answers) {
    renderList();
  }

  function toggleAnswerAccordian() {
    updateLoadLimit(loadLimit === 2 ? answers.length : 2);
    setCollapsed(!collapsed);
  }

  function toggleModal() {
    setModal(!modal);
  }

  function handleSubmit() {
    if ((name && email) && body) {
      const data = {
        body,
        name,
        email,
      };
      postMade(true);
      axios.post(`/answers/${question_id}`, data);
    } else {
      alert('Please fill in the form to submit a post.');
    }
  }

  function handleInput(e) {
    body = e.target.value;
  }

  function handleUserName(e) {
    name = e.target.value;
  }

  function handleUserEmail(e) {
    email = e.target.value;
  }

  function uploadAttachment() {
    // logic
  }

  function reportUser() {
    alert('Thanks you for keeping our community safe!');
    if (!reported) {
      hasReported(true);
      axios.put(`/questions/${questionId}/report`);
    }
  }

  function upvoteUser() {
    if (!voted) {
      hasVoted(true);
      axios.put(`/questions/${questionId}/helpful`)
        .then(() => getQuestions());
    }
  }

  useEffect(() => {
    hasReported(false);
    hasVoted(false);
  }, [productId]);

  useEffect(() => {
    if (post || voted) {
      getQuestions();
      renderList();
    }
  }, [post]);

  return !answers ? <SpinnerContainer><Spinner /></SpinnerContainer> : (
    <div>
      <AQuestion>
        <TitleStyle>
          {'Q: '}
          {question_body}
        </TitleStyle>
        <HelpfulBtnBlock>
          <QSmButton
            type="button"
            onClick={() => { toggleModal(); }}
          >
            Add Answer
          </QSmButton>
          <Helpful>
            Helpful?
            {' '}
            <HelpfulButton tabIndex={0} onClick={() => { upvoteUser(); }}>
              Yes
            </HelpfulButton>
            {question_helpfulness}
            {' | '}
            <HelpfulButton tabIndex={0} onClick={() => { reportUser(); }}>
              {!reported ? 'Report' : 'Reported'}
            </HelpfulButton>
          </Helpful>
        </HelpfulBtnBlock>
      </AQuestion>
      {
        filteredList.length > 0 ? ((filteredList.map((currentAnswer) => (
          <Answer
            currentAnswer={currentAnswer}
            setAnswers={setAnswers}
            questionId={questionId}
            key={currentAnswer.answer_id}
          />
        ))))
          : <NoAnswer>{noAnswers}</NoAnswer>
      }
      {
        answers.length > 2 ? (
          <SmButton
            type="button"
            onClick={() => { toggleAnswerAccordian(); }}
          >
            {answerListLabel}
          </SmButton>
        ) : null
      }
      <span>
        <Modal
          show={modal}
          closeCallback={() => { toggleModal(); }}
        >
          {!post
            ? (
              <ModalContainer>
                <h2>Answer A Question</h2>

                <form>
                  <ModalTextarea
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
                  <Button
                    handleClick={() => { handleSubmit(); }}
                    type="button"
                    label="Submit"
                  />
                  <Button
                    handleClick={() => { uploadAttachment(); }}
                    type="button"
                    label="Upload an Image"
                  />
                </span>
              </ModalContainer>
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

// Styles:

const HelpfulButton = styled.button`
  width: auto;
  font-size: 10px;
  border-radius: 50%;
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  transition-duration: 0.2s;
  &:hover{
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
  }
`;
const QSmButton = styled.button`
  box-shadow: 2px 0px 1px 0px #8888;
  width: 130px;
  background-color: white;
  height: 20px;
  margin: 5px 0;
  ${GlobalStyle.para_sm};
  &:hover{
    cursor: pointer;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.24), 0 7px 10px 0 rgba(0,0,0,0.19)
  }
`;
const SmButton = styled.button`
  box-shadow: 2px 0px 1px 0px #8888;
  width: auto;
  background-color: white;
  height: 20px;
  margin: 10px;
  ${GlobalStyle.para_sm};
  &:hover{
    cursor: pointer;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.24), 0 7px 10px 0 rgba(0,0,0,0.19)
  }
`;
const TitleStyle = styled.h1`
  ${GlobalStyle.para_xmd};
  display: inline;
  margin: 0px;
`;
const Helpful = styled.p`
  ${GlobalStyle.para_sm};
  display: inline;
  margin: 0px;
  margin-left: 5%;
  white-space: nowrap;
`;
const AQuestion = styled.div`
  border-top: grey 1px solid;
  border-bottom: grey 1px solid;
  padding: 5px 2%;
  margin: 0px;
  box-shadow: 2px 0px 1px 0px #8888;
  min-width: 50%;
  display: flex;
  justify-content: space-between;
`;
const HelpfulBtnBlock = styled.span`
  float: right;
  display: flex;
`;
const NoAnswer = styled.div`
  margin-left: 5%;
`;
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ModalTextarea = styled.textarea`
  resize: none;
  width: 400px;
  height: 200px;
`;
const ModalContainer = styled.div`
`;
