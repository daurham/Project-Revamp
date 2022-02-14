import React from 'react';
import SearchBar from './SearchBar';
// import QuestionList from './QuestionList';

function QuestAnswers() {
  // create funcitons that are passed to SearchBar that can-
  // pass data back.. IF this is even allowed..?

  // IF not allow, redesign so the SearchBar lives on this-
  // component and filters the list and Passes the list to-
  // QuestionList component.

  return (
    <div className="QuestAnswer-Component">
      <div><p>Questions and Answers</p></div>
      <SearchBar />
      {/* <QuestionList /> */}
    </div>
  );
}

export default QuestAnswers;
