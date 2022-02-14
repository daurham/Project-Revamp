import React, { useState } from 'react';
import { useData } from '../DataProvider';

function SearchBar({ sendFilteredResult }) {
  // use the entire questions array as a base to filter through.
  const { questions } = useData();

  // research into useState and hooks. Not using corrently.
  const [input, setInput] = useState('');

  // filter the questions
  function filterQuestions(query) {
    const searchResults = questions.filter((q) => {
      // logic
    });
    sendFilteredResult(searchResults);
    // send results back up to the QuestionList Component
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  // figure how to trigger after >= 3 input length
  if (input.length > 2) {
    filterQuestions(input);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for a question"
          onChange={handleInput}
        />
      </form>
    </div>
  );
}

export default SearchBar;
