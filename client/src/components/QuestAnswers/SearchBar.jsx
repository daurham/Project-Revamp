import React, { useState, useEffect } from 'react';
import { useQAData } from './QA - Context/DataProvider';
import { useData } from '../SharedContexts/DataProvider';

function SearchBar() {
/* TEST:
  Describe: 'My SearchBar component should capture the user input data'
  Test: 'input state should match the string "TesTinG"'
*/

  const { productId } = useData();
  const { questions, setQuestions } = useQAData();
  const [input, setInput] = useState('');

  console.log('SB', questions);

  // filter the questions
  function filterQuestions(query) {
    const filteredSearchResults = questions.filter((q) => {
      console.log('filtering', questions);
      if (q.question_body.toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
      return false;
    });
    setQuestions(filteredSearchResults);
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    if (input.length > 2 && questions.length > 0) {
      filterQuestions(input);
    }
  }, [input]);

  useEffect(() => {
    setInput('');
  }, [productId]);

  return (
    <div>
      <form>
        <input
          type="text"
          value={input}
          placeholder="Search for a question"
          onChange={handleInput}
        />
      </form>
      <br />
    </div>
  );
}

export default SearchBar;
