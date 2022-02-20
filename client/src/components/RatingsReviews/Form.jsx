import React, { useState } from "react";
import styled from 'styled-components';

function Form() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [summary, setSummary] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Nickname: ${password}
      Summary: ${country}
      Review: ${review}
    `);

    event.preventDefault();
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <h1>Write Your Review</h1>
      <p>About the product</p>
      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          placeholder="Example: jackson11@email.com"
          onChange={e => setEmail(e.target.value)}
          required />
      </label>

      <label>
        Nickname:
        <input
          name="nickname"
          type="nickname"
          value={nickname}
          placeholder="Example: jackson11!"
          onChange={e => setEmail(e.target.value)}
          required />
      </label>

      <label>
        Review Summary
        <input
          name="summary"
          type="summary"
          value={summary}
          onChange={e => setSummary(e.target.value)}
          required />
      </label>
      <label>
        Review Body
        <input
          name="review"
          value={review}
          placeholder="Why did you like the product or not?"
          onChange={e => setReview(e.target.value)}
          required>
        </input>
      </label>
      <div className="radio">
          <label>
            <input
              type="radio"
              value="Yes"
              // checked={setSelected === "Yes"}
              // onChange={onValueChange}
            />
            Yes
          </label>
        </div>
        <div className="radio">
          <label>
          Do you recommend this product?
            <input
              type="radio"
              value="No"
              // checked={setSelected === "No"}
              // onChange={onValueChange}
            />
            No
          </label>
        </div>

      <button>Submit</button>
    </FormStyle>
  );
}

const FormStyle = styled.div`
  position: relevant;
  height: 500px;
`

export default Form;