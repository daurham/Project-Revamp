import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import QuestionList from './QuestionList';
import { useData } from '../SharedContexts/DataProvider';
import css from './QuestAnswers.css';
import { useQAData } from './QA - Context/DataProvider';

function QuestAnswers() {
  /* TEST:
    Describe: 'should be working with the current products data'
    Test: 'after rendering, my question state should be equal to a fresh get request'
  */

  const { productId } = useData();
  const { updateID } = useData();
  const { questions } = useQAData();

  useEffect(() => {
  }, [productId]); // should auto update when id changes.

  console.log(questions);

  return !questions ? <div>Loading...</div> : (
    <div
      className={css.question_div}
    >
      <button style={{ backgroundColor: 'orange' }} type="button" onClick={updateID}> Get Another Product ID {productId} </button>
      <div><p>Questions and Answers</p></div>
      <SearchBar />
      <QuestionList />
    </div>
  );
}

export default QuestAnswers;
