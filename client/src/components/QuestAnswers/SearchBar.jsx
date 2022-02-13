import React, { useState } from 'react';
import { useData } from '../DataProvider';

function SearchBar() {
  const { product } = useData();

  // use the entire products questions array as a base to filter through.
  const questions = getQuestions(product);

  let [input, handleInput] = useState;

  handleSubmit(e) {
    e.preventDefault();
  }

  if (input.length > 2) {
    handleSubmit()
  }


  return (
    <div>
    <form>
      <input
        type="text"
        onChange={ () => {handleInput()}; }
        ></input>

      <input
        // submit btn
        type="submit"
        onClick={ () => {handleSubmit()}; }
      ></input>

    </form>
    </div>
  )
}

export default SearchBar;
