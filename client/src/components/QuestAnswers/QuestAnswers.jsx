import React from 'react';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';

function QuestAnswers() {
  return (
    <div>
      <div><p>Questions and Answers</p></div>
      <SearchBar />
      <QuestionList />
    </div>
  );
}

export default QuestAnswers;
