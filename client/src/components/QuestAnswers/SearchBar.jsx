import React, { useState } from 'react';

function SearchBar(questionData) {
  // console.log(questionData);
  const { questions } = questionData;
  const { sendFilteredResults } = questionData;
  // use the entire questions array as a base to filter through.

  // research into useState and hooks. Not using corrently.
  const [input, setInput] = useState('');

  // filter the questions
  function filterQuestions(query) {
    const searchResults = questions.filter((q) => {
      if (q.question_body.indexOf(query) > 0) {
        // console.log(q.question_body);
        return true;
      }
      return false;
      // logic
    });
    console.log(searchResults);
    sendFilteredResults(searchResults);
    // send results back up to the QuestionList Component
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  // figure how to trigger after >= 3 input length
  if (input.length > 2) {
    filterQuestions(input);
  }
  const styles = {
    borderBottom: 'solid 2px orange',
  };
  return (
    <div
      style={styles}
    >
      <form>
        <input
          type="text"
          placeholder="Search for a question"
          onChange={handleInput}
        />
      </form>
      <br />
    </div>
  );
}

export default SearchBar;
