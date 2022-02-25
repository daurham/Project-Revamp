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
  /* TEST:
    Describe: 'My Question component renders all the question data'
    Test: 'CurrentQuestion prop length should match a get request of the question'
  */

  const filteredList = [];
  const { questions, getQuestions } = useQAData();
  const { question_id } = currentQuestion;
  const { question_body } = currentQuestion;
  const { question_helpfulness } = currentQuestion;
  const { productId } = useData();
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
  const [collapsed, setCollapsed] = useState(true);

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

  const answerListLabel = (collapsed ? 'See more answers' : 'Collapse answers');

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
        body.photos = [attachment];
      }
      postMade(true);
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
    alert('Thanks you for keeping our community safe!');
    if (!reported) {
      hasReported(true);
      axios.put(`/questions/${questionId}/report`)
        .then(() => console.log('reported!'))
        .catch((err) => console.log(err));
    }
  }

  function upvoteUser() {
    if (!voted) {
      hasVoted(true);
      axios.put(`/questions/${questionId}/helpful`)
        .then(() => console.log('upvoted!'))
        .then(() => getQuestions())
        .catch((err) => console.log(err));
    }
  }

  const noAnswers = 'No ones answered yet...';

  const putStyles = { cursor: 'pointer' };

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
  // console.log('am i rerendering from questions?');
  return !answers ? <SpinnerContainer><Spinner /></SpinnerContainer> : (
    <div>
      <AQuestion>
        <TitleStyle>
          {'Q: '}
          {question_body}
        </TitleStyle>
        <HelpfulBtnBlock>
          <SmButton
            type="button"
            onClick={() => { toggleModal(); }}
          >
            Add Answer
          </SmButton>
          <Helpful>
            Helpful?
            {' '}
            <ins style={putStyles} role="button" tabIndex={0} onKeyDown={upvoteUser} onClick={upvoteUser}>
              Yes
              (
              {question_helpfulness}
              )
            </ins>
            {' | '}
            <ins style={putStyles} role="button" tabIndex={0} onKeyDown={reportUser} onClick={reportUser}>{!reported ? 'Report' : 'Reported'}</ins>
          </Helpful>
        </HelpfulBtnBlock>
      </AQuestion>
      {/* <TitleAStyle>A:</TitleAStyle> */}
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
          closeCallback={toggleModal}
        >
          {!post
            ? (
              <div>
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
                    handleClick={handleSubmit}
                    type="button"
                    label="Submit"
                  />
                  <Button
                    handleClick={uploadAttachment}
                    type="button"
                    label="Upload an Image"
                  />
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

// Styles:

const SmButton = styled.button`
  box-shadow: 2px 0px 1px 0px #8888;
  width: 100px;
  margin-left: 10px;
  background-color: white;
  height: 20px;
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
const TitleAStyle = styled.h1`
  ${GlobalStyle.para_xmd};
  margin: 0px;
  padding: 0% 2%;
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
  // display: inline-grid;

const NoAnswer = styled.div`
  margin-left: 5%;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ModalTextarea = styled.textarea`
  resize: none;
  width: 90%;
  height: 90%;
`;
