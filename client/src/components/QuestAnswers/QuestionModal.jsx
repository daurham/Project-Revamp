import React from 'react';
import { useData } from '../DataProvider';

function QuestionModal() {
  // look into creating a modal
  // use this modal for the questions and answers.

  // ideally, context is needed to know which product will recieve a post request

  const { product } = useData();
  const { postQuestion } = useData();

  // handles the post request
  function handleSubmit() {
    postQuestion(product); // add me;
    // logic
  }

  // launches the modal
  function launchModal() {
    // logic

    // creates a form, handles the handleSubmit funciton and user input state.
  }

  // upon user submission, submit a post request and-
  // rerender the question to the list in the selected filtered order

  return (
    <button
      type="button"
      className="question-list-btm-btn"
      onClick={launchModal}
    >
      Ask a Question
    </button>
  );
}

export default QuestionModal;
