import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';
import { useQAData } from './QAContext/DataProvider';
import Spinner from '../SharedComponents/Spinner';

function QuestAnswers() {
  const { questions } = useQAData();

  return !questions ? <SpinnerContainer><Spinner /></SpinnerContainer> : (
    <div>
      <QAFlexContainer>
        <QASection>
          <QAHeader><TitleStyle>Questions and Answers</TitleStyle></QAHeader>
          <SearchBar />
          <QuestionList />
        </QASection>
      </QAFlexContainer>
    </div>
  );
}

export default QuestAnswers;

const QAHeader = styled.div``;

const TitleStyle = styled.h1`
  ${GlobalStyle.sub_title2};
`;

const QAFlexContainer = styled.div`
  margin-top: 3%;
  display: flex;
  justify-self: center;
  min-width: 90%;
`;

const QASection = styled.div`
  justify-content: center;
  min-width: 100%;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
