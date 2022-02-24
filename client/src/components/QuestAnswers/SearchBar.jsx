import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQAData } from './QA - Context/DataProvider';
import { useData } from '../SharedContexts/DataProvider';

function SearchBar() {
/* TEST:
  Describe: 'My SearchBar component should capture the user input data'
  Test: 'input state should match the string "TesTinG"'

*/

  const { productId } = useData();
  const { questions, setQuestions, getQuestions } = useQAData();
  const [input, setInput] = useState('');

  // filter the questions
  function filterQuestions(query) {
    const filteredSearchResults = questions.filter((q) => {
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
      <SearchBarContainer>
        <InputSearchBar
          type="text"
          value={input}
          placeholder="Search for a question"
          onChange={handleInput}
        />
      </SearchBarContainer>
      <br />
    </div>
  );
}

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  `;

const InputSearchBar = styled.input`
  width: 100%;
  min-width: 20%;
  margin-left: 60%;
  margin-right: 5%;
  float: right;
`;
