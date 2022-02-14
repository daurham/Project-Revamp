import React, { useState } from 'react';
import SearchBar from './SearchBar';
// import QuestionList from './QuestionList';
import { useData } from '../DataProvider';

function QuestAnswers() {
  // create funcitons that are passed to SearchBar that can-
  // pass data back.. IF this is even allowed..?

  // const { product } = useData();
  // const { getProduct } = useData();
  const { questions } = useData();
  const { getQuestions } = useData();
  // questions.results.map((qData) => console.log(qData));
  console.log('quest:', questions.results);
  // console.log(product.results);
  // console.log(getProduct(product.product_id));

  // IF not allow, redesign so the SearchBar lives on this-
  // component and filters the list and Passes the list to-
  // QuestionList component.

  // const [userSpecifiedResults, setUserSpecifiedResults] = useState([]);

  function getFilteredResults(results, cb) {
  //   cb(results);
  }

  // console.log(setUserSpecifiedResults);

  return (
    <div className="QuestAnswer-Component">
      <div><p>Questions and Answers</p></div>
      <SearchBar sendFilteredResults={() => { getFilteredResults(); }} />
      {/* <QuestionList /> */}

      <button type="button" value="text" onClick={() => getQuestions(40345)}>get Questions</button>
      {typeof questions === 'object' ? questions.results.map((q) => (<ul>{JSON.stringify(q.question_body)}</ul>)) : null}
    </div>
  );
}

export default QuestAnswers;
