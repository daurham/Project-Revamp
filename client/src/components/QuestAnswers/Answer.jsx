import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import { useData } from '../SharedContexts/DataProvider';
import { useQAData } from './QAContext/DataProvider';

function Answer({ currentAnswer, setAnswers, questionId }) {
  /* TEST:
    Describe: 'My Answer component renders all the answer data'
    Test: 'CurrentAnswer prop length should match a get request of the answer'
  */
  // const { setAnswers } = setAnswers;
  // const { questionId } = questionId;
  if (!setAnswers || !questionId) {
    console.log(setAnswers);
    console.log(questionId);
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
  let keyVal = 0;

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
  // console.log('qId: ', ;
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
      <span>
        <AnAnswer>
          <ReviewBody>{body}</ReviewBody>
          <NameAndDate>
            -
            {answerer_name === 'Seller' ? <b>{answerer_name}</b> : answerer_name}, {newDate}
          </NameAndDate>
          <Helpful>
            Helpful?
            {' '}
            <ins onClick={upvoteUser}>Yes? ({helpfulness})</ins>
            {' | '}
            <ins onClick={reportUser}>{!reported ? 'Report' : 'Reported'}</ins>
          </Helpful>
        </AnAnswer>
      </span>
      {/* {photos.length > 0
        && (
          <TheGallery>
            {
              photos.length > 0
                ? (
                  photos.map((pic) => (<Gallery><Image key={ keyVal += 1 } src={pic.url} alt="Shared Pic" /></Gallery>))
                ) : null
            }
          </TheGallery>
        )} */}
    </div>
  );
}

export default Answer;

// Styles:

const TitleStyle = styled.h1`
  ${GlobalStyle.sub_title};
  margin: 0px;
`;
const ReviewBody = styled.p`
  ${GlobalStyle.para_md};
  margin: 0px;
  margin-left: 1%;
`;
const NameAndDate = styled.p`
  ${GlobalStyle.para_sm};
  margin: 0px;
  margin-left: 2%;
`;
const Helpful = styled.p`
  ${GlobalStyle.para_sm};
  margin: 0px;
  margin-left: 2%;
  cursor: pointer;
`;
const Recommend = styled.p`
  ${GlobalStyle.para_sm};
`;
const ReviewerName = styled.p`
  ${GlobalStyle.para_sm};
`;
const DateStyle = styled.p`
  ${GlobalStyle.para_sm};
`;
// border-top: grey 1px solid;

const AnAnswer = styled.div`
  border-bottom: light-grey 2px solid;
  padding: 0px;
  margin: 0px;
  box-shadow: 2px 0px 1px 0px #8888;
`;

const Gallery = styled.div`
  display: inline-block;
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  max-height: 180px;
  max-width: 180px;
  &:hover {
    border: 1px solid #777;
  }
  `;
  // width: 180px;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const TheGallery = styled.div`
  display: block;
  max-height: 400px;
  max-width: 100%;
`;
