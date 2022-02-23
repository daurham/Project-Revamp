import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useQAData } from './QAContext/DataProvider';
import { useData } from '../SharedContexts/DataProvider';

function SearchBar() {
  /* TEST:
    Describe: 'My SearchBar component should capture the user input data'
    Test: 'input state should match the string "TesTinG"'
  */

  const { productId } = useData();
  const {
    questions,
    setQuestions,
    getQuestions,
    setSearchResults,
  } = useQAData();
  const [input, setInput] = useState('');

  function filterQuestions(query) {
    if (input.length < 2) {
      setSearchResults(questions);
    } else {
      const filteredSearchResults = questions.filter((q) => {
        if (q.question_body.toLowerCase().includes(query.toLowerCase())) {
          return true;
        }
        return false;
      });
      console.log('q: should be full ', questions);
      setSearchResults(filteredSearchResults);
    }
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  useEffect(() => {
    if ((input.length > 2 || input.length === 0) && questions.length > 0) {
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
