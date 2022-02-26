import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';

function Answer({ currentAnswer, setAnswers, questionId }) {
  if (!setAnswers || !questionId) {
    return null;
  }

  function getAnswers(id) {
    axios.get(`/answers/${id}`)
      .then((result) => {
        setAnswers(result.data.results);
      });
  }

  const { answer_id } = currentAnswer;
  const [voted, hasVoted] = useState(false);
  const [reported, hasReported] = useState(false);
  let keyVal = answer_id;

  function getKey() {
    keyVal += 1;
    return keyVal + answer_id;
  }

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
        .then(() => getAnswers(questionId))
        .catch((err) => console.log(err));
    }
  }
  const { answerer_name } = currentAnswer;
  const { body } = currentAnswer;
  const { date } = currentAnswer;
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  const newDate = `${month}/${day}/${year}`;

  const { photos } = currentAnswer;
  const { helpfulness } = currentAnswer;

  return (
    <div>
      <AnAnswer>
        <AnswerOpener>
          <TitleAStyle>A:</TitleAStyle>
          <ReviewBody>{body}</ReviewBody>
          <AnswerBottom>
            <NameAndDate>
              -
              {answerer_name === 'Seller' ? <b>{answerer_name}</b> : answerer_name}, {newDate}
            </NameAndDate>
            <Helpful>
              Helpful?
              {' '}
              <HelpfulButton onClick={() => { upvoteUser(); }}>
                Yes
              </HelpfulButton>
              {' '}
              {helpfulness}
              {' | '}
              <HelpfulButton onClick={() => { reportUser(); }}>
                {!reported ? 'Report' : 'Reported'}
              </HelpfulButton>
            </Helpful>
          </AnswerBottom>
        </AnswerOpener>
      </AnAnswer>
      <ImgBlock>
        {photos.length > 0
          && (
            <GalleryItem>
              {
                photos.length > 0
                  ? (
                    photos.map((pic) => (<Gallery key={() => { getKey(); }}><Image key={() => { getKey(); }} src={pic.url} alt="Shared Pic" loading="lazy" /></Gallery>))
                  ) : null
              }
            </GalleryItem>
          )}
      </ImgBlock>
    </div>
  );
}

export default Answer;

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
const ReviewBody = styled.p`
  ${GlobalStyle.para_md};
  margin: 0px;
  margin-left: 1%;
  display: inline-line;
`;
const NameAndDate = styled.p`
  ${GlobalStyle.para_sm};
  margin: 0px;
  margin-left: 2%;
  display: inline-line;
`;
const Helpful = styled.p`
  ${GlobalStyle.para_sm};
  display: inline-line;
  margin: 0px;
  margin-left: 2%;
  cursor: pointer;
`;
const TitleAStyle = styled.h1`
  ${GlobalStyle.para_xmd};
`;
const AnswerOpener = styled.span`
display: inline-block;
`;
const AnswerBottom = styled.span`
display: -webkit-inline-box;
`;
const AnAnswer = styled.div`
  display: flex;
  border-bottom: light-grey 2px solid;
  padding: 0 2%;
  margin: 0px;
  box-shadow: 2px 0px 1px 0px #8888;
  justify-content: space-between;
`;
const Gallery = styled.div`
  display: inline-block;
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  max-height: 180px;
  max-width: 180px;
  &:hover {
  }
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;
const GalleryItem = styled.div`
  display: inline-flex;
  max-height: 400px;
  max-width: 100%;
`;
const ImgBlock = styled.div`
  display: inline-flex;
`;
